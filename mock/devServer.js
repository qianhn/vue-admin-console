const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const path = require('path')
const Mock = require('mockjs')
const express = require('express')

const mockDir = path.join(process.cwd(), 'mock')

function registerRoutes(app) {
    let mockLastIndex
    const { mocks } = require('./index.js')
    console.log(mocks)
    const mocksForServer = mocks.map(route => {
        return responseFake(route.url, route.type, route.response)
    })
    for (const mock of mocksForServer) {
        app[mock.type](mock.url, mock.response)
        mockLastIndex = app._router.stack.length
    }
    const mockRoutesLength = Object.keys(mocksForServer).length
    return {
        mockRoutesLength: mockRoutesLength,
        mockStartIndex: mockLastIndex - mockRoutesLength
    }
}

function unregisterRoutes() {
    Object.keys(require.cache).forEach(i => {
        if (i.includes(mockDir)) {
            delete require.cache[require.resolve(i)]
        }
    })
}

// for mock server
const responseFake = (url, type, respond) => {
    return {
        url: new RegExp(`${url}`),
        type: type || 'get',
        response(req, res) {
            console.log('请求反馈' + req.path)
            res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
        }
    }
}
let mockRouter
function setupMocks(app) {
    mockRouter = new express.Router()
    const { mocks } = require('./index.js')
    const mocksForServer = mocks.map(route => {
        return responseFake(route.url, route.type, route.response)
    })
    for (const mock of mocksForServer) {
        mockRouter[mock.type](mock.url, mock.response)
    }
}
// 原版 会造成 错乱 由github 大神解决 https://github.com/PanJiaChen/vue-element-admin/pull/3304
module.exports = app => {
    // parse app.body
    // https://expressjs.com/en/4x/api.html#req.body
    app.use(bodyParser.json())
    app.use(
        bodyParser.urlencoded({
            extended: true
        })
    )

    // const mockRoutes = registerRoutes(app)
    // var mockRoutesLength = mockRoutes.mockRoutesLength
    // var mockStartIndex = mockRoutes.mockStartIndex
    // console.log(mockRoutesLength)
    // console.log(mockStartIndex)
    setupMocks(app)
    app.use('/', function replacableRouter(req, res, next) {
        mockRouter(req, res, next)
    })
    // watch files, hot reload mock server
    chokidar
        .watch(mockDir, {
            ignored: /devServer/,
            ignoreInitial: true
        })
        .on('all', (event, path) => {
            if (event === 'change' || event === 'add') {
                try {
                    // remove mock routes stack
                    // app._router.stack.splice(mockStartIndex, mockRoutesLength)
                    // clear routes cache
                    unregisterRoutes()
                    setupMocks(app)
                    // const mockRoutes = registerRoutes(app)
                    // mockRoutesLength = mockRoutes.mockRoutesLength
                    // mockStartIndex = mockRoutes.mockStartIndex
                    console.log(chalk.magentaBright(`\n > 当前修改文件 ${path}`))
                } catch (error) {
                    console.log(chalk.redBright(error))
                }
            }
        })
}

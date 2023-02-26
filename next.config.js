/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
        domains: [
            'vnxpedia.3i.com.vn',
        ],
    },
}

module.exports = nextConfig

const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    // Handle dynamic routes
    server.get('/way-to-travel/:id', (req, res) => {
        const actualPage = '/way-to-travel/[id]'
        const queryParams = { id: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })
    server.get('/destination/:id', (req, res) => {
        const actualPage = '/destination/[id]'
        const queryParams = { id: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })
    server.get('/tour-detail/:id', (req, res) => {
        const actualPage = '/tour-detail/[id]'
        const queryParams = { id: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })
    server.get('/hotel-detail/:id', (req, res) => {
        const actualPage = '/hotel-detail/[id]'
        const queryParams = { id: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })
    server.get('/transfer-detail/:id', (req, res) => {
        const actualPage = '/transfer-detail/[id]'
        const queryParams = { id: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })
    server.get('/blog-detail/:id', (req, res) => {
        const actualPage = '/blog-detail/[id]'
        const queryParams = { id: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })
    server.get('/payment/:id', (req, res) => {
        const actualPage = '/payment/[id]'
        const queryParams = { id: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })

    // Handle all other routes
    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, err => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
/*const path = require('path');
const express = require('express')
const xss = require('xss')
//const debug = require('debug')('express:view')
const FoldersService = require('./folders-service')

const foldersRouter = express.Router()
const jsonParser = express.json()

const serialize = folder => ({
    id: folder.id,
    folder_name: folder.folder_name
})

foldersRouter
    .route('/')
    .get((req, res, next) => {
        const knexInstance = req.app.get('db');
        FoldersService.getAllFolders(knexInstance)
            .then(folders => {
                res.json(folders.map(serialize))
            })
            .catch(next)
    })
    .post(jsonParser, (req, res, next) => {
        const { folder_name } = req.body;
        const newFolder = { folder_name };

        if (!folder_name) {
            return res.status(400).json({
                error: { message: `Missing 'folder_name' in request body` }
            })
        }

        FoldersService.insertFolder(
            req.app.get('db'),
            newFolder
        )

            .then(folder => {
                res
                    .status(201)
                    .location(path.posix.join(req.originalUrl, `/${folder.id}`))
                    .json(serialize(folder))
            })
            .catch(next)
    })

foldersRouter
    .route('/folder/:folder_id')
    .all((req, res, next) => {
        FoldersService.getById(
            req.app.get('db'),
            req.params.folder_id
        )
            .then(folder => {
                if (!folder) {
                    return res.status(404).json({
                        error: { message: `Folder does not exist` }
                    })
                }
                res.folder = folder;
                next()
            })
            .catch(next)

    })
    .get((req, res, next) => {
        res.json({
            id: res.folder.id,
            folder_name: xss(res.folder_name), // sanitize title
        })
    })
    .delete(jsonParser, (req, res, next) => {
        FoldersService.deleteFolder(req.app.get('db'),
            req.params.folder_id)
            .then(numRowsAffected => {
                res.status(204).end()
            })
            .catch(next)
    })
    .patch(jsonParser, (req, res, next) => {
        const { folder_name } = req.body;
        const folderToUpdate = { folder_name }

     
        if (!folder_name) {
            return res.status(400).json({
                error: {message: `Request body must contain a folder_name `}
            })
        }
        
        FoldersService.updateFolder(
            req.app.get('db'),
            req.params.folder_id,
            folderToUpdate
        )

            .then(numRowsAffected => {
                res.status(204).end()
            })

            .catch(next)
    })

module.exports = foldersRouter*/
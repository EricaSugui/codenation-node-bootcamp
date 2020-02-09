const fs = require('fs')
const { toHTML } = require('./template')
const csv = require('csvtojson')


function loadCSV(filename) {
    const path = `${process.cwd()}/modulo-3/exercicios/assets/${filename}.csv`

    return new Promise((resolve, reject) => {
        
        fs.readFile(path, 'utf-8', (error, data) => {
            if(error) reject(error)

            resolve(data)
        })
    })
}

async function parseCSV(csvStr) {
    return await csv()
    .fromString(csvStr)
}

async function createHTML(movies, filename) {
    const path = `${process.cwd()}/modulo-3/exercicios/assets/${filename}.csv`

    Promise.all(movies.map(movie => {
        return new Promise((resolve, reject) =>{
            const html = toHTML(movie)

            fs.writeFile(path, (error, result) => {
                if(error) {
                    reject(error)
                }

                resolve('Create with success')
            })
         })
        
    }))
    //return new Promise((resolve, reject) => {
    //    fs.writeFile(path,)
    //})
}

module.exports = {
    loadCSV,
    parseCSV,
    createHTML
}
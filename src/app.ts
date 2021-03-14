import App from './api'

const PORT = 3000
App.listen(PORT, () => {
    console.debug(`Server starts at ${PORT}`)
})
// callbacks
const fetchData = (cb) => {
    cb("hello")
}



describe('test callback ', () => {

    it('callback recive hello', (done) => {

        const callback = (data) => {
            return data
        }
        fetchData(callback)
    })
})


// promises

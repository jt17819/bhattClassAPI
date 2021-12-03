const request = require('supertest');
const app = require('../app');

describe('API server', () => {
    let api;
    let testStudent = {
        // id: 19,
        name: 'Bob',
        age: 30
    }

    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log('test server running on port 5000')
        })
    })
    afterAll((done) => {
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    it('responds to get / with status of 200', (done) => {
        request(api).get('/').expect(200, done);
    });
    it('responds to get /bhatt with status of 200', (done) => {
        request(api).get('/bhatt').expect(200, done);
    });
    it('retrieves a student by id', (done) => {
        request(api)
            .get('/bhatt/3')
            .expect(200)
            .expect({id:3, name:'Brandon', age:24}, done)
    })
    //create new cat
    it('responds to post /bhatt with status 201', (done) => {
        request(api)
            .post('/bhatt')
            .send(testStudent)
            .expect(201)
            .expect({id:19, ...testStudent})
    });
    //delete cat
    it('responds to delete /bhatt/:id with status of 204', async() => {
        await request(api)
            .delete('/bhatt/19')
            .expect(204)
        const updatedStudent = await request(api)
            .get('/bhatt');
        
        expect(updatedStudent.body.length).toBe(18);
    })
});
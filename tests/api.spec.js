const request = require('supertest');
const app = require('../app');

describe('API server', () => {
    let api;
    let testCat = {
        id: 4,
        name: 'Bob',
        age: 3
    }

    beforeAll(() => {
        api = app.listen(3000, () => {
            console.log('test server running on port 3000')
        })
    })
    afterAll((done) => {
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    it('responds to get / with status of 200', (done) => {
        request(api).get('/').expect(200, done);
    });
    it('responds to get /cats with status of 200', (done) => {
        request(api).get('/cats').expect(200, done);
    });
    it('retrieves a cat by id', (done) => {
        request(api)
            .get('/cats/3')
            .expect(200)
            .expect({id:3, name:'Rumble', age:12}, done)
    })
    //create new cat
    it('responds to post /cats with status 201', (done) => {
        request(api)
            .post('/cats')
            .send(testCat)
            .expect(201)
            .expect({id:4, ...testCat})
    });
    //delete cat
    it('responds to delete /cats/:id with status of 204', async() => {
        await request(api)
            .delete('/cats/4')
            .expect(204)
        const updatedCats = await request(api)
            .get('/cats');
        
        expect(updatedCats.body.length).toBe(3);
    })
});
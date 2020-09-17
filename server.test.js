const supertest = require('supertest')

const server = require('./server')

const db = require('./connection')


describe('server operations', () => {

    describe('POST /animals', () => { 


        it('should return HTTP status code 201 when passed correct data', () => {
            return supertest(server)
                .post('/animals')
                .send({ animal_name: 'Kool Kangaroo' })
                .then(res => {
                    expect(res.status).toBe(201)
                })
        })

        it('should insert new animal into the database', async () => {

            return supertest(server)
                .post('/animals')
                .send({ animal_name: 'Delightful Dog' })
                .then(res => {
                    expect(res.body.data.animal_name).toBe('Delightful Dog')
                })

            // const res = await supertest(server).post('/animals')
            //     .send({ animal_name: 'Kool Kangaroo' })

            //     expect(res.body.data.animal_name).toBe('Kool Kangaroo')
        })

    })


    describe('DELETE /animals/:id', () => {

        it('should return HTTP status code 200 when item deleted', () => {
            return supertest(server)
                .delete('/animals/1')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it(`should return message "Animal deleted!" when item deleted`, async () => {

            return supertest(server) 
                .delete('/animals/2') 
                .then(res => {
                    console.log(res.body)
                    expect(res.body.message).toBe('Animal deleted!')
                })

        })

    })

})
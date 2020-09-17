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

            const res = await supertest(server).post('/animals')
                .send({ animal_name: 'Kool Kangaroo' })

                expect(res.body.data.animal_name).toBe('Kool Kangaroo')
        })

    })


    describe('DELETE /animals/:id', () => {

        it('should return HTTP status code 200 when item deleted', () => {
            return supertest(server)
                .delete('/animals/3')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it(`should return message "Animal deleted!" when item deleted`, async () => {

            return supertest(server)
                .delete('/animals/4') 
                .then(res => {
                    console.log(res.body)
                    expect(res.body.message).toBe('Animal deleted!')
                })

        })

    })

})
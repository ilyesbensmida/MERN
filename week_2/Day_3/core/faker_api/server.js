const faker = require('@faker-js/faker');
const express = require("express")
const app = express()
const port = 8000

const createUser = () => {
    const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return newUser
}

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: [
            faker.address.streetAddress(),
            faker.address.city(),
            faker.address.state(),
            faker.address.zipCode(),
            faker.address.country()
        ]
    }
    return newCompany
}

// routes
app.get('/api/users/new', (req, res) => res.json(createUser()))
app.get('/api/companies/new', (req, res) => res.json(createCompany()))
app.get('/api/user/company', (req, res) => {
    const user = createUser()
    const company = createCompany()
    res.json( {user : user, company : company} )
})

app.listen( port, () => console.log(`Listening on port: ${port}`) )
const {
  pizzas: {
    getPizzas,
    addPizza,
    eatPizza,
    removePizza
  }
} = require('../controllers')

module.exports = app => {
  // GET all pizzas
  app.get('/pizzas', (req, res) => {
    getPizzas(pizzas => {
      res.json(pizzas)
    })
  })

  // POST one pizza
  app.post('/pizzas', (req, res) => {
    addPizza(req.body.name, req.body.eaten, () => {
      res.sendStatus(200)
    })
  })

  // PUT one pizza
  app.put('/pizzas/:id', (req, res) => {
    eatPizza(parseInt(req.params.id), () => {
      res.sendStatus(200)
    })
  })

  // DELETE one pizza
  app.delete('/pizzas/:id', (req, res) => {
    removePizza(parseInt(req.params.id), () => {
      res.sendStatus(200)
    })
  })
}
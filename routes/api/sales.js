const express = require('express');
const dayjs = require('dayjs')
const auth = require('../../middlewares/auth')
const { check, validationResult } = require('express-validator');
const Sales = require('../../models/Sales');
const router = express.Router();

//@method POST /api/sales
//desc Adicionar registro de venda
router.post('/', auth, check('balance', 'Balanço total da venda é necessário').notEmpty(), async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const sale = new Sales({
            ...req.body
        })
        await sale.save();
        res.json(sale)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
    
})

//@method delete /api/sales
//desc Deletar registro de venda
router.delete('/:sale_id', auth, async (req, res) => {
   const { sale_id } = req.params
    try {
        await Sales.findByIdAndRemove(sale_id);
        res.json({ msg: 'Registro de venda removido com sucesso'})
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
    
})

// pegar todas as vendas
router.get('/', auth, async (req, res) => {
    try {
        const sales = await Sales.find()
        let dailySales = [];
        let monthlySales = [];
        sales.forEach((sale) => {
            const soldDate = dayjs(sale.date)
            if (soldDate.diff(dayjs(), 'day') === 0 && soldDate.diff(dayjs(), 'month' === 0)) {
                dailySales.push(sale)
                monthlySales.push(sale);
            } else if (soldDate.diff(dayjs(), 'month' === 0)) {
                monthlySales.push(sale);
            }
        
        })
        res.json({ dailySales, monthlySales })
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
})

module.exports = router
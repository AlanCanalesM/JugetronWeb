module.exports = {
    clienteMain: function (req, res) {
        res.render('dashboardUsuarios/dashboardUsuarios');
    },

    donar:function (req, res) { 
       res.render('dashboardUsuarios/clientesDonar'); 
    }
}
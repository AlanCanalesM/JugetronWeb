module.exports = {
    clienteMain: function (req, res) {
        res.render('dashboardClientes/dashboardClientes');
    },

    donar:function (req, res) { 
       res.render('dashboardClientes/clientesDonar'); 
    },

    misDonaciones: function (req, res) {
        res.render('dashboardClientes/misDonaciones');
    },

    perfilCliente: function (req, res) {
        res.render('dashboardClientes/perfil');
    }
}
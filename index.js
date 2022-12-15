const soap = require('soap')

const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'

soap.createClient(url, (err, client) => {
    if(err){
        console.log(err)
    }else{
        // client
        console.log('ok')
        client.consultaCEP({
            cep: '55900000'
        },(err, res) => {
            console.log(res)
        })
    }
})
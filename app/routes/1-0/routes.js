module.exports = function (router) {

    var version = "1-0";

    router.post('/' + version + '/registration/skip-step/gov-funding', function (req, res) {
        // Get the answer from session data
        // The name between the quotes is the same as the 'name' attribute on the input elements
        // However in JavaScript we can't use hyphens in variable names
      
        let answer = req.session.data['add-your-paye']
      
        if (answer === 'yes') {
          res.redirect('/' + version + '/registration/skip-step/ways-to-add-paye')
        } else {
          res.redirect('/' + version + '/registration/skip-step/homepage-addPAYE')
        }
      })
    
    
      router.post('/' + version + '/registration/skip-step/ways-to-add-paye', function (req, res) {
        // Get the answer from session data
        // The name between the quotes is the same as the 'name' attribute on the input elements
        // However in JavaScript we can't use hyphens in variable names
      
        let answer = req.session.data['ways-to-add-your-paye']
      
        if (answer === 'govgateway') {
          res.redirect('/' + version + '/registration/skip-step/using-your-gg')
        } else {
          res.redirect('/' + version + '/registration/skip-step/pensionsReg')
        }
      })
      
    
    
      router.post('/' + version + '/registration/skip-step/agreement', function (req, res) {
        // Get the answer from session data
        // The name between the quotes is the same as the 'name' attribute on the input elements
        // However in JavaScript we can't use hyphens in variable names
      
        let answer = req.session.data['agreementSign']
      
        if (answer === 'yesSign') {
          res.redirect('/' + version + '/registration/skip-step/interim-homepage')
        } else {
          res.redirect('/' + version + '/registration/skip-step/homepage-signAgreement')
        }
      })
 


/* 
      router.post('/' + version + '/registration/skip-step/searchOrg', function (req, res) {
        // Get the answer from session data
        // The name between the quotes is the same as the 'name' attribute on the input elements
        // However in JavaScript we can't use hyphens in variable names
      
        let search = req.session.data['orgChoose']
      
        if (search != '') {
          res.redirect('/' + version + '/registration/skip-step/multiOrgs')
        } else {
          res.redirect('/' + version + '/registration/skip-step/searchOrgResults')
        }
      }) */


      router.post('/' + version + '/registration/skip-step/gov-gateway', function (req, res) {
        // Get the answer from session data
        // The name between the quotes is the same as the 'name' attribute on the input elements
        // However in JavaScript we can't use hyphens in variable names
      
        let ggid = req.session.data['gatewayLogin']
        let ggpassword = req.session.data['gatewayPassword']
      
        if (ggid === 'abcd123' && ggpassword ==='abcd123') {
          res.redirect('/' + version + '/registration/skip-step/multiOrgs')
        } else {
          res.redirect('/' + version + '/registration/skip-step/searchOrgResults')
        }
      })
      
 };


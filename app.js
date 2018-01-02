var app = new Vue({
    el: '#root',
    data: {
        errorMessage: "",
        successMessage: "",
        Employee_id: '',
        Access_code: '',
        dataloaded: false,
        access_granted: false,
        Customer_id: '',
        check_ut: 0,
        check_id: 0,
        check_bs: 0,
        check_pp: 0,
        checKiD: [],
        check_gc: 0,
        CustName: '',
        proofid: 'proofofid',
        guachk: 'guarantorcheque',
        passportp: 'passportphoto',
        utility: 'utilitybill',
        banks: 'bankstatement',
        idchecked: true,
        selected_doc: null,
        task:'',
        verify:false,
        w_guar:0,
        p_guar:0,
        store_v:0,
        work_gua: 'workverify',
        per_gua: 'perverify',
        store_visited: 'storevisited',





    },

    mounted: function() {
        console.log('mounted');

    },

    computed: {

    },
    ready: function() {


    },
    methods: {



        GainAccess: function() {
            app.dataloaded = true
                // console.log("yes");
                // console.log(app.Employee_id + " " + app.Access_code);
            var dat = {
                Employee_id: app.Employee_id,
                Access_code: app.Access_code
            }
            var formData = app.toFormData(dat);
            console.log()
            axios.post("https://wafcolapi.herokuapp.com/api.php?action=aknowledge", formData)
                .then(function(response) {
                    app.dataloaded = false;
                    console.log(response);
                    if (response.data.error) {
                        app.errorMessage = response.data.message;

                        setTimeout(function() {
                            app.errorMessage = '';
                        }, 2000);

                    } else {
                        if (response.data.data.length != 0) {
                            app.access_granted = true;
                            app.successMessage = "Access Granted!, Enter Customer ID below";

                            setTimeout(function() {
                                app.successMessage = '';
                            }, 2000);
                        } else {
                            app.errorMessage = "Access Denied, Wrong Login Details";

                            setTimeout(function() {
                                app.errorMessage = '';
                            }, 2000);
                        }
                    }
                });
        },

        ModalComfirm: function(doc_type) {
            app.selected_doc = doc_type;
        },

        Acknowledge: function(doc_type) {
            if (doc_type == 'proofofid') {
                axios.post("https://wafcolapi.herokuapp.com/api.php?action=document", {
                        Customer_id: app.Customer_id,
                        check_id: 1

                    })
                    .then(function(response) {
                        console.log(response);
                        if (response.data.error) {
                            app.submitted = false;
                            app.errorMessage = response.data.message;
                            setTimeout(function() {
                                app.errorMessage = '';
                            }, 2000);
                        } else {
                            app.submitted = false;

                            app.successMessage = response.data.message;
                            app.CheckDoc(app.Customer_id);
                            // app.sendNotification(name, telnumber)
                            setTimeout(function() {
                                app.successMessage = '';
                            }, 2000);
                            app.selected_doc = null;
                        }
                    });
            }
            if (doc_type == 'guarantorcheque') {
                axios.post("https://wafcolapi.herokuapp.com/api.php?action=document", {
                        Customer_id: app.Customer_id,
                        check_gc: 1
                    })
                    .then(function(response) {
                        console.log(response);
                        if (response.data.error) {
                            app.submitted = false;
                            app.errorMessage = response.data.message;
                            setTimeout(function() {
                                app.errorMessage = '';
                            }, 2000);
                        } else {
                            app.submitted = false;

                            app.successMessage = response.data.message;
                            app.CheckDoc(app.Customer_id);
                            // app.sendNotification(name, telnumber)
                            setTimeout(function() {
                                app.successMessage = '';
                            }, 2000);
                            app.selected_doc = null;
                        }
                    });
            }

            if (doc_type == 'passportphoto') {
                axios.post("https://wafcolapi.herokuapp.com/api.php?action=document", {
                        Customer_id: app.Customer_id,
                        check_pp: 1
                    })
                    .then(function(response) {
                        console.log(response);
                        if (response.data.error) {
                            app.submitted = false;
                            app.errorMessage = response.data.message;
                            setTimeout(function() {
                                app.errorMessage = '';
                            }, 2000);
                        } else {
                            app.submitted = false;

                            app.successMessage = response.data.message;
                            app.CheckDoc(app.Customer_id);
                            // app.sendNotification(name, telnumber)
                            setTimeout(function() {
                                app.successMessage = '';
                            }, 2000);
                            app.selected_doc = null;
                        }
                    });
            }

            if (doc_type == 'utilitybill') {
                axios.post("https://wafcolapi.herokuapp.com/api.php?action=document", {
                        Customer_id: app.Customer_id,
                        check_ut: 1
                    })
                    .then(function(response) {
                        console.log(response);
                        if (response.data.error) {
                            app.submitted = false;
                            app.errorMessage = response.data.message;
                            setTimeout(function() {
                                app.errorMessage = '';
                            }, 2000);
                        } else {
                            app.submitted = false;

                            app.successMessage = response.data.message;
                            app.CheckDoc(app.Customer_id);
                            // app.sendNotification(name, telnumber)
                            setTimeout(function() {
                                app.successMessage = '';
                            }, 2000);
                            app.selected_doc = null;
                        }
                    });
            }

            if (doc_type == 'bankstatement') {
                axios.post("https://wafcolapi.herokuapp.com/api.php?action=document", {
                        Customer_id: app.Customer_id,
                        check_bs: 1

                    })
                    .then(function(response) {
                        console.log(response);
                        if (response.data.error) {
                            app.submitted = false;
                            app.errorMessage = response.data.message;
                            setTimeout(function() {
                                app.errorMessage = '';
                            }, 2000);
                        } else {
                            app.submitted = false;

                            app.successMessage = response.data.message;
                            app.CheckDoc(app.Customer_id);
                            // app.sendNotification(name, telnumber)
                            setTimeout(function() {
                                app.successMessage = '';
                            }, 2000);
                            app.selected_doc = null;
                        }
                    });
            }
            if (doc_type == 'workverify') {
                axios.post("https://wafcolapi.herokuapp.com/api.php?action=document", {
                        Customer_id: app.Customer_id,
                        w_guar: 1
                       

                    })
                    .then(function(response) {
                        console.log(response);
                        if (response.data.error) {
                            app.submitted = false;
                            app.errorMessage = response.data.message;
                            setTimeout(function() {
                                app.errorMessage = '';
                            }, 2000);
                        } else {
                            app.submitted = false;

                            app.successMessage = response.data.message;
                            app.CheckDoc(app.Customer_id);
                            // app.sendNotification(name, telnumber)
                            setTimeout(function() {
                                app.successMessage = '';
                            }, 2000);
                            app.selected_doc = null;
                        }
                    });
            }

            if (doc_type == 'perverify') {
                axios.post("https://wafcolapi.herokuapp.com/api.php?action=document", {
                        Customer_id: app.Customer_id,
                        p_guar:1
                     
                    })
                    .then(function(response) {
                        console.log(response);
                        if (response.data.error) {
                            app.submitted = false;
                            app.errorMessage = response.data.message;
                            setTimeout(function() {
                                app.errorMessage = '';
                            }, 2000);
                        } else {
                            app.submitted = false;

                            app.successMessage = response.data.message;
                            app.CheckDoc(app.Customer_id);
                            // app.sendNotification(name, telnumber)
                            setTimeout(function() {
                                app.successMessage = '';
                            }, 2000);
                            app.selected_doc = null;
                        }
                    });
            }

            if (doc_type == 'storevisited') {
                axios.post("https://wafcolapi.herokuapp.com/api.php?action=document", {
                        Customer_id: app.Customer_id,
                        store_v:1

                    })
                    .then(function(response) {
                        console.log(response);
                        if (response.data.error) {
                            app.submitted = false;
                            app.errorMessage = response.data.message;
                            setTimeout(function() {
                                app.errorMessage = '';
                            }, 2000);
                        } else {
                            app.submitted = false;

                            app.successMessage = response.data.message;
                            app.CheckDoc(app.Customer_id);
                            // app.sendNotification(name, telnumber)
                            setTimeout(function() {
                                app.successMessage = '';
                            }, 2000);
                            app.selected_doc = null;
                        }
                    });
            }

        },

        CheckDoc: function(customer) {
            console.log(customer)
            axios.post("https://wafcolapi.herokuapp.com/api.php?action=checkDoc", {
                    Customer_id: customer,
                })
                .then(function(response) {
                    console.log(response);
                    if (response.data.error) {
                        app.errorMessage = response.data.message;
                        setTimeout(function() {
                            app.errorMessage = '';
                        }, 2000);
                    } else {
                        app.idchecked = false;
                        if (response.data.checklist.length != 0 && app.task=='Acknowledge') {

                            app.check_ut = response.data.checklist[0].utility;
                            app.check_id = response.data.checklist[0].id_proof;
                            app.check_bs = response.data.checklist[0].banks;
                            app.check_pp = response.data.checklist[0].passport;
                            app.check_gc = response.data.checklist[0].gcheque;

                        }
                        else if (response.data.checklist.length != 0 && app.task=='Verification'){
                            app.w_guar = response.data.checklist[0].work_guarantor;
                            app.p_guar = response.data.checklist[0].personal_gua;
                            app.store_v = response.data.checklist[0].store_visited;
                        
                        }
                        
                        else {
                            // app.errorMessage = "Customer ID Doest Exist!";
                            // // app.sendNotification(name, telnumber)
                            // setTimeout(function() {
                            //     app.errorsMessage = '';
                            // }, 2000);
                            // app.dataloaded = false;
                        }
                        app.successMessage = response.data.message;
                        // app.sendNotification(name, telnumber)
                        setTimeout(function() {
                            app.successMessage = '';
                        }, 2000);

                    }
                });

        },

        CheckId: function() {
            app.dataloaded = true;
            axios.post("https://wafcolapi.herokuapp.com/api.php?action=checkId", {
                    Customer_id: app.Customer_id
                })
                .then(function(response) {
                    console.log(response);

                    if (response.data.error) {
                        app.errorMessage = response.data.message;
                        app.dataloaded = false;
                        setTimeout(function() {
                            app.errorMessage = '';
                        }, 2000);

                    } else {
                        if (response.data.checklist.length != 0 ){
                            app.dataloaded = false;
                            app.CustName = response.data.checklist[0].first_name + " " + response.data.checklist[0].last_name
                        if (app.task =='Acknowledge'){
                            app.CheckDoc(app.Customer_id);                        
                            app.successMessage = "Click to Acknowlege Customer ";
                            setTimeout(function() {
                                app.successMessage = '';
                            }, 2000);
                            
                        }
                        else if(app.task =='Verification'){
                            app.verify = true
                            app.successMessage = "Verify Customer Guarantors and Store ";
                            setTimeout(function() {
                                app.successMessage = '';
                            }, 2000);
                        }
                        else{
                            app.errorMessage = "Choose a Task ";
                            setTimeout(function() {
                                app.errorMessage = '';
                            }, 2000);
                        }
                            
                        } else {
                            app.errorMessage = "Customer ID Doest Exist!";
                            // app.sendNotification(name, telnumber)
                            setTimeout(function() {
                                app.errorMessage = '';
                            }, 2000);
                            app.dataloaded = false;
                        }
                        // app.ApproveCustomer(app.CustName, app.phoneNo);
                        // app.Customer_id = "";
                    }
                });
        },


        resetMessage: function() {
            app.errorMessage = "";
            app.successMessage = "";
        },

        updateComment: function() {

            if (app.comment.Res == undefined || app.comment.Comment == undefined) {
                app.errorMessage = "Fill in all fields before submission";
                setTimeout(function() {
                    app.errorMessage = '';
                }, 2000);
            } else {
                app.comment.Comment = app.comment.Res + ", " + app.comment.Comment;
                var formData = app.toFormData(app.comment);

                axios.post("https://wafcolapi.herokuapp.com/api.php?action=comment", formData)
                    .then(function(response) {
                        console.log(response);
                        app.comment = {};
                        if (response.data.error) {
                            app.errorMessage = response.data.message;
                            /*     app.clearMessage(); */
                        } else {
                            app.getReminderSMS();
                            app.get1DayOverdue();
                            app.get16DaysOverdue();
                            app.get31DaysOverdue();
                            app.successMessage = response.data.message;
                            setTimeout(function() {
                                app.successMessage = '';

                            }, 2000);

                        }
                    });
            }
        },

        selectUser(comment_id) {
            app.comment.Transaction_id = comment_id;
            console.log(app.comment.Transaction_id);
        },

        toFormData: function(obj) {
            var form_data = new FormData();
            for (var key in obj) {
                form_data.append(key, obj[key]);
            }
            return form_data;
        },


        sendNotification(name, telnumber) {
            telnumber = telnumber.substr(1);
            let message = "Dear " + name + ", Congratulations, You have been approved. Come to the store to make a purchase. Altara Credit Limited.";
            // axios.get("http://api.smartsmssolutions.com/smsapi.php?username=bjmarcson&password=fabregas10&sender=Altara&recipient=" + telnumber + "&message=" + message + "")
            axios.get("https://api.infobip.com/sms/1/text/query?username=Oluwatoke12&password=Altara99&to=" + 234 + telnumber + "&text=" + message + "")

            .then(function(response2) {
                console.log(response2);
                if (response2.status == 200) {
                    app.successMessage = "Notification sent to Customer";

                    setTimeout(function() {
                        app.successMessage = '';
                    }, 2000);
                    // updateRemark(Updata)
                } else {
                    app.errorMessage = "Error Sending Message, Contact Support";
                }
            });
        }

    }
});
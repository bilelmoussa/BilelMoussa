const express = require('express');
const router = express.Router();
const { google } = require('googleapis');
const service_account = require('../../MyFirstProject-1caccd5a6e7b.json');

const scopes = ['https://www.googleapis.com/auth/analytics.readonly'];

const reporting = google.analyticsreporting('v4');

const jwt = new  google.auth.JWT(service_account.client_email, null, service_account.private_key, scopes);

const view_id = '206636903';


let getReports = async function (reports) {

    await jwt.authorize();

    let request = {
        'headers': {'Content-Type': 'application/json'}, 'auth': jwt, 'resource': reports
    };

    return await reporting.reports.batchGet(request);
};


router.get('/users', (req, res, next)=>{
    const startDate = req.query.startDate || "";
    const endDate = req.query.endDate || "";

    let basic_report = {
        'reportRequests': [
            {
                'viewId': view_id,
                'dateRanges': [{'startDate': startDate, 'endDate': endDate}],
                'metrics': [{'expression': 'ga:users'}],
            }
        ]
    };

    getReports(basic_report)
    .then(response => res.status(200).json({success: true, data: response.data.reports[0].data.rows[0].metrics[0].values[0]}))
    .catch(e => res.status(500).json({success: false, errors: e}));
})

router.get('/newusers', (req, res, next)=>{
    const startDate = req.query.startDate || "";
    const endDate = req.query.endDate || "";
    let basic_report = {
        'reportRequests': [
            {
                'viewId': view_id,
                'dateRanges': [{'startDate': startDate, 'endDate': endDate}],
                'metrics': [{'expression': 'ga:newUsers'}],
            }
        ]
    };

    getReports(basic_report)
    .then(response =>  res.status(200).json({success: true, data: response.data.reports[0].data.totals[0].values[0]}))
    .catch(e => res.status(500).json({success: false, errors: e}));
})

router.get('/pageviews', (req, res, next)=>{
    const startDate = req.query.startDate || "";
    const endDate = req.query.endDate || "";

    let basic_report = {
        'reportRequests': [
            {
                'viewId': view_id,
                'dateRanges': [{'startDate': startDate, 'endDate': endDate}],
                'metrics': [{'expression': 'ga:pageviews'}],
            }
        ]
    };

    getReports(basic_report)
    .then(response => res.status(200).json({success: true, data: response.data.reports[0].data.totals[0].values[0]}))
    .catch(e => res.status(500).json({success: false, errors: e}));
})


router.get('/sessions', (req, res, next)=>{
    const startDate = req.query.startDate || "";
    const endDate = req.query.endDate || "";

    let basic_report = {
        'reportRequests': [
            {
                'viewId': view_id,
                'dateRanges': [{'startDate': startDate, 'endDate': endDate}],
                'metrics': [{'expression': 'ga:sessions'}],
            }
        ]
    };

    getReports(basic_report)
    .then(response => res.status(200).json({success: true, data: response.data.reports[0].data.totals[0].values[0]}))
    .catch(e => res.status(500).json({success: false, errors: e}));
})

router.get('/usersmetrics', (req, res, next)=>{
    const startDate = req.query.startDate || "";
    const endDate = req.query.endDate || "";

    let basic_report = {
        'reportRequests': [
            {
                'viewId': view_id,
                'dateRanges': [{'startDate': startDate, 'endDate': endDate}],
                'metrics': [{'expression': 'ga:users'}],
                'dimensions': [{'name': 'ga:date'}],
                'includeEmptyRows': true,
            }
        ]
    };

    getReports(basic_report)
    .then(response => {
        const Rows = response.data.reports[0].data.rows;  
        const newRows = Rows.map((row, index)=>{
            let dimension = row.dimensions[0].replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
            return {dimensions: dimension, metrics: row.metrics[0].values[0]}
        })
        
        return res.status(200).json({success: true, data: newRows})
    })
    .catch(e => res.status(500).json({success: false, errors: e}));
})

module.exports = router;
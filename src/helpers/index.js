import axios from 'axios';

import * as Setting from '../constants/Setting';

export async function handleGet(endpointApi, token) {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        let endpoint = Setting.URL + endpointApi;
        const response = await axios.get(endpoint, config);
        return response;
    } catch (error) {
        console.log(error);

    }
}

export async function handleSubmit(endpointApi, data, token) {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        let endpoint = Setting.URL + endpointApi;
        const response = await axios.post(endpoint, data, config);
        return response;
    } catch (error) {
        console.log(error);

    }
}

export async function handleUpdate(endpointApi, data, token) {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        let endpoint = Setting.URL + endpointApi;
        const response = await axios.put(endpoint, data, config);
        return response;
    } catch (error) {
        console.log(error);

    }
}

export async function handleDelete(endpointApi, token) {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        let endpoint = Setting.URL + endpointApi;
        const response = await axios.delete(endpoint, config);
        return response;
    } catch (error) {
        console.log(error);

    }
}

export async function login(endpointApi, data) {
    try {
        const config = {
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
            },
        };
        let endpoint = Setting.URL + endpointApi;
        const response = await axios.post(endpoint, data, config);
        return response;
    } catch (error) {
        console.log(error);

    }
}

export async function getList(endpointApi, token) {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        let endpoint = Setting.URL + endpointApi;
        const response = await axios.get(endpoint, config);
        return response;
    } catch (error) {
        console.log(error);

    }
}

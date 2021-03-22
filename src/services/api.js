import axios from 'axios';

class ApiService{
  basesPath = "https://reqres.in/api/";

  httpHeaders = {
    headers : {
      Authorization : 'Bearer ' + localStorage.getItem('token') || ''
    }
  }

  async getAPI(url){
    let endpoint = this.basesPath + url;
    return await axios.get(endpoint, this.httpHeaders)
  }

  async postAPI(url, params){
    let endpoint = this.basesPath + url;
    return await axios.post(endpoint, params);
  }

  putAPI(url, params){
    let endpoint = this.basesPath + url;
    return axios.put(endpoint, params, this.httpHeaders)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error
      })
  }

  deleteAPI(url){
    let endpoint = this.basesPath + url;
    return axios.delete(endpoint, this.httpHeaders)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error
      })
  }

}

export default new ApiService()
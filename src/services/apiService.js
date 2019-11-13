/**
 * @ApiService is the single entry point for all api's calling, Here the Single fetch is written that will serve requests
 */

import { Alert } from 'react-native';
import Config from '../config';
import * as CONST from '../utils/constants';

export async function CommonFetch(params, opt) {
  try {
    const URL = `${Config.API_URL}` + `${opt.url}`+ `&client_id=${Config.CLIENT_KEY_STAGE}`;
    const Options = {
      method: opt.method,
      URL,
      body: params
    };

    const ReqOptions = {
      method: Options.method,
      headers: {
      },
      body: params,
      timeout: CONST.API_TIMEOUT
    };

    ReqOptions.headers['Accept'] = 'application/json';
    ReqOptions.headers['Content-Type'] = 'application/json';

    if (ReqOptions.method === CONST.GET_API) {
      delete ReqOptions.body;
    } else {
      ReqOptions.body = JSON.stringify(Options.body);
    }

    try {
      return new Promise((Resolve, Reject) => {
        requestTimeoutPromise(ReqOptions.timeout, fetch(Options.URL, ReqOptions), Resolve, Reject);
      }).then((Response) => {
        console.log('Api Response: ', Response);
        if (Response.status === 200 || Response.status === 201) {
          return Response.json();
        } else if (Response.status === 400) { //* Not found OR Something Went Wrong
          Response.json().then((res) => {
            Alert.alert('Url not found');
            return undefined;
          });
        } else if (Response.status === 401) { //* Not found OR Something Went Wrong
          try {
            Response.json().then((res) => {
              if (res.message === 'Invalid credentials') {
                Alert.alert('Invalid credentials');
              } else {
                Alert.alert(res);
              }
              return undefined;
            });
          } catch (error) {
            console.log('Error: ', error);
          }
        } else if (Response.status === 404) { //* Not found OR Something Went Wrong
          try {
            Response.json().then((res) => {
              Alert.alert(res);
              return undefined;
            });
          } catch (error) {
            console.log('Error: ', error);
          }
        } else if (Response.status === 409) { //* Not found OR Something Went Wrong
          Response.json().then((res) => {
            Alert.alert('Feedback already exist!');
            return undefined;
          });
        } else {
          Alert.alert('SomeThing Went Wrong');
          return undefined;
        }
      })
        .catch((error) => {
          console.log('ApiService Error: ', error);
        });
    } catch (error) {
      console.log('ApiService Error: ', error);
      return undefined;
    }
  } catch (error) {
    console.log('ApiService Error: ', error);
    return undefined;
  }
}

/**
     * Request Timeout Promise
     */
function requestTimeoutPromise(waitingTime, promise, resoveInternal, rejectInternal) {
  const _timeout = setTimeout(() => {
    rejectInternal('TIMEOUT');
  }, waitingTime);
  try {
    promise.then(
      (res) => {
        clearTimeout(_timeout);
        resoveInternal(res);
      },
      (resError) => {
        clearTimeout(_timeout);
        rejectInternal('Request Timeout');
      }
    );
  } catch (error) {
    console.log('Timeout Error', error);
  }
}

import {
  GET_REQUESTS_REQUEST,
  GET_REQUESTS_SUCCESS,
  GET_REQUESTS_ERROR,
  GET_REQUEST_REQUEST,
  GET_REQUEST_SUCCESS,
  GET_REQUEST_ERROR,
  GET_REQUEST_STATUSES_REQUEST,
  GET_REQUEST_STATUSES_SUCCESS,
  GET_REQUEST_STATUSES_ERROR,
  GET_ANSWER_REQUEST,
  GET_ANSWER_SUCCESS,
  GET_ANSWER_ERROR,
  GET_COMPLAINTS_REQUEST,
  GET_COMPLAINTS_SUCCESS,
  GET_COMPLAINTS_ERROR,
} from '@/actions/RequestActions'

const initialState = {
  requests: [],
  currentRequest: {
    status: {},
    category: {},
    user: {},
    answers: [],
  },
  requestStatuses: [],
  answer: {
    messages: [],
  },
  complaints: [],
  isAnswerFetching: false,
  isSingleFetching: false,
  isComplaintsFetching: false,
  isFetching: false,
  errorCode: 0,
}

export const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    /* Список заявок */
    case GET_REQUESTS_REQUEST:
      return { ...state, isFetching: true }
    case GET_REQUESTS_SUCCESS:
      return { ...state, requests: action.payload, isFetching: false }
    case GET_REQUESTS_ERROR:
      return { ...state, isFetching: false }
    /* Получение заявки */
    case GET_REQUEST_REQUEST:
      return {
        ...state,
        errorCode: 0,
        isSingleFetching: true,
        answer: {
          messages: [],
        },
      }
    case GET_REQUEST_SUCCESS:
      return { ...state, currentRequest: action.payload, isSingleFetching: false }
    case GET_REQUEST_ERROR:
      return { ...state, errorCode: action.payload, isSingleFetching: false }
    /* Получение ответа */
    case GET_ANSWER_REQUEST:
      return { ...state, isAnswerFetching: true }
    case GET_ANSWER_SUCCESS:
      return { ...state, answer: action.payload, isAnswerFetching: false }
    case GET_ANSWER_ERROR:
      return { ...state, isAnswerFetching: false }
    /* Список заявок */
    case GET_REQUEST_STATUSES_REQUEST:
      return { ...state, isFetching: true }
    case GET_REQUEST_STATUSES_SUCCESS:
      return { ...state, requestStatuses: action.payload, isFetching: false }
    case GET_REQUEST_STATUSES_ERROR:
      return { ...state, isFetching: false }
    /* Список жалоб */
    case GET_COMPLAINTS_REQUEST:
      return { ...state, isComplaintsFetching: true }
    case GET_COMPLAINTS_SUCCESS:
      return { ...state, complaints: action.payload, isComplaintsFetching: false }
    case GET_COMPLAINTS_ERROR:
      return { ...state, isComplaintsFetching: false }

    default:
      return state
  }
}

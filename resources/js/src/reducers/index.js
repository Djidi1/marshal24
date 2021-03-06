import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { userReducer } from './user'
import { accountReducer } from './account'
import { settingsReducer } from './settings'
import { shopReducer } from './shop'
import { categoryReducer } from './category'
import { roleReducer } from './role'
import { requestReducer } from './request'
import { statisticReducer } from './statistic'
import { bannerReducer } from './banner'
import { notistackReducer } from './notistack'

export const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    account: accountReducer,
    shop: shopReducer,
    category: categoryReducer,
    role: roleReducer,
    request: requestReducer,
    statistic: statisticReducer,
    banner: bannerReducer,
    settings: settingsReducer,
    notistack: notistackReducer,
  })

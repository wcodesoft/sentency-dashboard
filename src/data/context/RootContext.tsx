import React from "react";
import {AuthorStore} from "../store/AuthorStore";
import {ViewStore} from "../store/ViewStore";
import {QuoteStore} from "../store/QuoteStore";
import {UserStore} from "../store/UserStore";
import {QueueStore} from "../store/QueueStore";


export const rootContext = React.createContext({
    authorStore: new AuthorStore(),
    viewStore: new ViewStore(),
    quoteStore: new QuoteStore(),
    userStore: new UserStore(),
    queueStore: new QueueStore()
})

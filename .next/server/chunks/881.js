"use strict";
exports.id = 881;
exports.ids = [881];
exports.modules = {

/***/ 2347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ SidebarActionButton_SidebarActionButton)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7403);
;// CONCATENATED MODULE: ./components/Buttons/SidebarActionButton/SidebarActionButton.tsx

const SidebarActionButton = ({ handleClick, children })=>/*#__PURE__*/ jsx_runtime.jsx("button", {
        className: "min-w-[20px] p-1 text-neutral-400 hover:text-neutral-100",
        onClick: handleClick,
        children: children
    });
/* harmony default export */ const SidebarActionButton_SidebarActionButton = (SidebarActionButton);

;// CONCATENATED MODULE: ./components/Buttons/SidebarActionButton/index.ts



/***/ }),

/***/ 1086:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ Chat)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_app_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6485);
/* harmony import */ var _utils_app_conversation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6236);
/* harmony import */ var _utils_data_throttle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1697);
/* harmony import */ var _pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9965);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(251);
/* harmony import */ var _ChatInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5600);
/* harmony import */ var _ChatLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4149);
/* harmony import */ var _ErrorMessageDiv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4284);
/* harmony import */ var _ModelSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8098);
/* harmony import */ var _SystemPrompt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8894);
/* harmony import */ var _Temperature__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7716);
/* harmony import */ var _MemoizedChatMessage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4117);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _MemoizedChatMessage__WEBPACK_IMPORTED_MODULE_14__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _MemoizedChatMessage__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const Chat = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ stopConversationRef })=>{
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("chat");
    const { state: { selectedConversation, conversations, models, apiKey, pluginKeys, serverSideApiKeyIsSet, messageIsStreaming, modelError, loading, prompts }, handleUpdateConversation, dispatch: homeDispatch } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_6__["default"]);
    const [currentMessage, setCurrentMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [autoScrollEnabled, setAutoScrollEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [showSettings, setShowSettings] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [showScrollDownButton, setShowScrollDownButton] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const chatContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const handleSend = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (message, deleteCount = 0, plugin = null)=>{
        if (selectedConversation) {
            let updatedConversation;
            if (deleteCount) {
                const updatedMessages = [
                    ...selectedConversation.messages
                ];
                for(let i = 0; i < deleteCount; i++){
                    updatedMessages.pop();
                }
                updatedConversation = {
                    ...selectedConversation,
                    messages: [
                        ...updatedMessages,
                        message
                    ]
                };
            } else {
                updatedConversation = {
                    ...selectedConversation,
                    messages: [
                        ...selectedConversation.messages,
                        message
                    ]
                };
            }
            homeDispatch({
                field: "selectedConversation",
                value: updatedConversation
            });
            homeDispatch({
                field: "loading",
                value: true
            });
            homeDispatch({
                field: "messageIsStreaming",
                value: true
            });
            const chatBody = {
                model: updatedConversation.model,
                messages: updatedConversation.messages,
                key: apiKey,
                prompt: updatedConversation.prompt,
                temperature: updatedConversation.temperature
            };
            const endpoint = (0,_utils_app_api__WEBPACK_IMPORTED_MODULE_5__/* .getEndpoint */ .O)(plugin);
            let body;
            if (!plugin) {
                body = JSON.stringify(chatBody);
            } else {
                body = JSON.stringify({
                    ...chatBody,
                    googleAPIKey: pluginKeys.find((key)=>key.pluginId === "google-search")?.requiredKeys.find((key)=>key.key === "GOOGLE_API_KEY")?.value,
                    googleCSEId: pluginKeys.find((key)=>key.pluginId === "google-search")?.requiredKeys.find((key)=>key.key === "GOOGLE_CSE_ID")?.value
                });
            }
            const controller = new AbortController();
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                signal: controller.signal,
                body
            });
            if (!response.ok) {
                homeDispatch({
                    field: "loading",
                    value: false
                });
                homeDispatch({
                    field: "messageIsStreaming",
                    value: false
                });
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(response.statusText);
                return;
            }
            const data = response.body;
            if (!data) {
                homeDispatch({
                    field: "loading",
                    value: false
                });
                homeDispatch({
                    field: "messageIsStreaming",
                    value: false
                });
                return;
            }
            if (!plugin) {
                if (updatedConversation.messages.length === 1) {
                    const { content } = message;
                    const customName = content.length > 30 ? content.substring(0, 30) + "..." : content;
                    updatedConversation = {
                        ...updatedConversation,
                        name: customName
                    };
                }
                homeDispatch({
                    field: "loading",
                    value: false
                });
                const reader = data.getReader();
                const decoder = new TextDecoder();
                let done = false;
                let isFirst = true;
                let text = "";
                while(!done){
                    if (stopConversationRef.current === true) {
                        controller.abort();
                        done = true;
                        break;
                    }
                    const { value, done: doneReading } = await reader.read();
                    done = doneReading;
                    const chunkValue = decoder.decode(value);
                    text += chunkValue;
                    if (isFirst) {
                        isFirst = false;
                        const updatedMessages = [
                            ...updatedConversation.messages,
                            {
                                role: "assistant",
                                content: chunkValue
                            }
                        ];
                        updatedConversation = {
                            ...updatedConversation,
                            messages: updatedMessages
                        };
                        homeDispatch({
                            field: "selectedConversation",
                            value: updatedConversation
                        });
                    } else {
                        const updatedMessages = updatedConversation.messages.map((message, index)=>{
                            if (index === updatedConversation.messages.length - 1) {
                                return {
                                    ...message,
                                    content: text
                                };
                            }
                            return message;
                        });
                        updatedConversation = {
                            ...updatedConversation,
                            messages: updatedMessages
                        };
                        homeDispatch({
                            field: "selectedConversation",
                            value: updatedConversation
                        });
                    }
                }
                (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_15__/* .saveConversation */ .m7)(updatedConversation);
                const updatedConversations = conversations.map((conversation)=>{
                    if (conversation.id === selectedConversation.id) {
                        return updatedConversation;
                    }
                    return conversation;
                });
                if (updatedConversations.length === 0) {
                    updatedConversations.push(updatedConversation);
                }
                homeDispatch({
                    field: "conversations",
                    value: updatedConversations
                });
                (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_15__/* .saveConversations */ .fB)(updatedConversations);
                homeDispatch({
                    field: "messageIsStreaming",
                    value: false
                });
            } else {
                const { answer } = await response.json();
                const updatedMessages = [
                    ...updatedConversation.messages,
                    {
                        role: "assistant",
                        content: answer
                    }
                ];
                updatedConversation = {
                    ...updatedConversation,
                    messages: updatedMessages
                };
                homeDispatch({
                    field: "selectedConversation",
                    value: _utils_app_conversation__WEBPACK_IMPORTED_MODULE_15__/* .updateConversation */ .X1
                });
                (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_15__/* .saveConversation */ .m7)(updatedConversation);
                const updatedConversations = conversations.map((conversation)=>{
                    if (conversation.id === selectedConversation.id) {
                        return updatedConversation;
                    }
                    return conversation;
                });
                if (updatedConversations.length === 0) {
                    updatedConversations.push(updatedConversation);
                }
                homeDispatch({
                    field: "conversations",
                    value: updatedConversations
                });
                (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_15__/* .saveConversations */ .fB)(updatedConversations);
                homeDispatch({
                    field: "loading",
                    value: false
                });
                homeDispatch({
                    field: "messageIsStreaming",
                    value: false
                });
            }
        }
    }, [
        apiKey,
        conversations,
        pluginKeys,
        selectedConversation,
        stopConversationRef
    ]);
    const scrollToBottom = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (autoScrollEnabled) {
            messagesEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
            textareaRef.current?.focus();
        }
    }, [
        autoScrollEnabled
    ]);
    const handleScroll = ()=>{
        if (chatContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
            const bottomTolerance = 30;
            if (scrollTop + clientHeight < scrollHeight - bottomTolerance) {
                setAutoScrollEnabled(false);
                setShowScrollDownButton(true);
            } else {
                setAutoScrollEnabled(true);
                setShowScrollDownButton(false);
            }
        }
    };
    const handleScrollDown = ()=>{
        chatContainerRef.current?.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth"
        });
    };
    const handleSettings = ()=>{
        setShowSettings(!showSettings);
    };
    const onClearAll = ()=>{
        if (confirm(t("Are you sure you want to clear all messages?")) && selectedConversation) {
            handleUpdateConversation(selectedConversation, {
                key: "messages",
                value: []
            });
        }
    };
    const scrollDown = ()=>{
        if (autoScrollEnabled) {
            messagesEndRef.current?.scrollIntoView(true);
        }
    };
    const throttledScrollDown = (0,_utils_data_throttle__WEBPACK_IMPORTED_MODULE_16__/* .throttle */ .P)(scrollDown, 250);
    // useEffect(() => {
    //   console.log('currentMessage', currentMessage);
    //   if (currentMessage) {
    //     handleSend(currentMessage);
    //     homeDispatch({ field: 'currentMessage', value: undefined });
    //   }
    // }, [currentMessage]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        throttledScrollDown();
        selectedConversation && setCurrentMessage(selectedConversation.messages[selectedConversation.messages.length - 2]);
    }, [
        selectedConversation,
        throttledScrollDown
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            setAutoScrollEnabled(entry.isIntersecting);
            if (entry.isIntersecting) {
                textareaRef.current?.focus();
            }
        }, {
            root: null,
            threshold: 0.5
        });
        const messagesEndElement = messagesEndRef.current;
        if (messagesEndElement) {
            observer.observe(messagesEndElement);
        }
        return ()=>{
            if (messagesEndElement) {
                observer.unobserve(messagesEndElement);
            }
        };
    }, [
        messagesEndRef
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative flex-1 overflow-hidden bg-white dark:bg-[#343541]",
        children: !(apiKey || serverSideApiKeyIsSet) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mx-auto flex h-full w-[300px] flex-col justify-center space-y-6 sm:w-[600px]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center text-4xl font-bold text-black dark:text-white",
                    children: "Welcome to Rulz-AI"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center text-lg text-black dark:text-white",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mb-8",
                            children: `Rulz-AI is an open source clone of OpenAI's ChatGPT UI.`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mb-2 font-bold",
                            children: "Important: Rulz-AI is 100% unaffiliated with OpenAI."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center text-gray-500 dark:text-gray-400",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mb-15",
                            children: "Rulz-AI allows you to plug in your API key to use this UI with their API."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-15",
                            children: [
                                "It is ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "italic",
                                    children: "only"
                                }),
                                " used to communicate with their API."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mb-12",
                            children: t("Please set your OpenAI API key in the bottom left of the sidebar.")
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                t("If you don't have an OpenAI API key, you can get one here: "),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://platform.openai.com/account/api-keys",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "text-blue-500 hover:underline",
                                    children: "openai.com"
                                })
                            ]
                        })
                    ]
                })
            ]
        }) : modelError ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ErrorMessageDiv__WEBPACK_IMPORTED_MODULE_10__/* .ErrorMessageDiv */ .Y, {
            error: modelError
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-h-full overflow-x-hidden",
                    ref: chatContainerRef,
                    onScroll: handleScroll,
                    children: selectedConversation?.messages.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mx-auto flex flex-col space-y-5 md:space-y-10 px-3 pt-5 md:pt-12 sm:max-w-[600px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-center text-3xl font-semibold text-gray-800 dark:text-gray-100",
                                    children: models.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            size: "25px",
                                            className: "mx-auto"
                                        })
                                    }) : "RULZ-AI"
                                }),
                                models.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex h-full flex-col space-y-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-600",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModelSelect__WEBPACK_IMPORTED_MODULE_11__/* .ModelSelect */ .q, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SystemPrompt__WEBPACK_IMPORTED_MODULE_12__/* .SystemPrompt */ .r, {
                                            conversation: selectedConversation,
                                            prompts: prompts,
                                            onChangePrompt: (prompt)=>handleUpdateConversation(selectedConversation, {
                                                    key: "prompt",
                                                    value: prompt
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Temperature__WEBPACK_IMPORTED_MODULE_13__/* .TemperatureSlider */ .$, {
                                            label: t("Temperature"),
                                            onChangeTemperature: (temperature)=>handleUpdateConversation(selectedConversation, {
                                                    key: "temperature",
                                                    value: temperature
                                                })
                                        })
                                    ]
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sticky top-0 z-10 flex justify-center border border-b-neutral-300 bg-neutral-100 py-2 text-sm text-neutral-500 dark:border-none dark:bg-[#444654] dark:text-neutral-200",
                                children: [
                                    t("Model"),
                                    ": ",
                                    selectedConversation?.model.name,
                                    " | ",
                                    t("Temp"),
                                    ": ",
                                    selectedConversation?.temperature,
                                    " |",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "ml-2 cursor-pointer hover:opacity-50",
                                        onClick: handleSettings,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconSettings, {
                                            size: 18
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "ml-2 cursor-pointer hover:opacity-50",
                                        onClick: onClearAll,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconClearAll, {
                                            size: 18
                                        })
                                    })
                                ]
                            }),
                            showSettings && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-col space-y-10 md:mx-auto md:max-w-xl md:gap-6 md:py-3 md:pt-6 lg:max-w-2xl lg:px-0 xl:max-w-3xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex h-full flex-col space-y-4 border-b border-neutral-200 p-4 dark:border-neutral-600 md:rounded-lg md:border",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModelSelect__WEBPACK_IMPORTED_MODULE_11__/* .ModelSelect */ .q, {})
                                })
                            }),
                            selectedConversation?.messages.map((message, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MemoizedChatMessage__WEBPACK_IMPORTED_MODULE_14__/* .MemoizedChatMessage */ .m, {
                                    message: message,
                                    messageIndex: index,
                                    onEdit: (editedMessage)=>{
                                        setCurrentMessage(editedMessage);
                                        // discard edited message and the ones that come after then resend
                                        handleSend(editedMessage, selectedConversation?.messages.length - index);
                                    }
                                }, index)),
                            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatLoader__WEBPACK_IMPORTED_MODULE_9__/* .ChatLoader */ .G, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-[162px] bg-white dark:bg-[#343541]",
                                ref: messagesEndRef
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatInput__WEBPACK_IMPORTED_MODULE_8__/* .ChatInput */ .x, {
                    stopConversationRef: stopConversationRef,
                    textareaRef: textareaRef,
                    onSend: (message, plugin)=>{
                        setCurrentMessage(message);
                        handleSend(message, 0, plugin);
                    },
                    onScrollDownClick: handleScrollDown,
                    onRegenerate: ()=>{
                        if (currentMessage) {
                            handleSend(currentMessage, 2, null);
                        }
                    },
                    showScrollDownButton: showScrollDownButton
                })
            ]
        })
    });
});
Chat.displayName = "Chat";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: () => (/* binding */ ChatInput)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7403);
// EXTERNAL MODULE: external "@tabler/icons-react"
var icons_react_ = __webpack_require__(2236);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./pages/api/home/home.context.tsx
var home_context = __webpack_require__(9965);
// EXTERNAL MODULE: ./types/plugin.ts
var types_plugin = __webpack_require__(4597);
;// CONCATENATED MODULE: ./components/Chat/PluginSelect.tsx




const PluginSelect = ({ plugin, onPluginChange, onKeyDown })=>{
    const { t } = (0,external_next_i18next_.useTranslation)("chat");
    const selectRef = (0,external_react_.useRef)(null);
    const handleKeyDown = (e)=>{
        const selectElement = selectRef.current;
        const optionCount = selectElement?.options.length || 0;
        if (e.key === "/" && e.metaKey) {
            e.preventDefault();
            if (selectElement) {
                selectElement.selectedIndex = (selectElement.selectedIndex + 1) % optionCount;
                selectElement.dispatchEvent(new Event("change"));
            }
        } else if (e.key === "/" && e.shiftKey && e.metaKey) {
            e.preventDefault();
            if (selectElement) {
                selectElement.selectedIndex = (selectElement.selectedIndex - 1 + optionCount) % optionCount;
                selectElement.dispatchEvent(new Event("change"));
            }
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (selectElement) {
                selectElement.dispatchEvent(new Event("change"));
            }
            onPluginChange(types_plugin/* PluginList */.xN.find((plugin)=>plugin.name === selectElement?.selectedOptions[0].innerText));
        } else {
            onKeyDown(e);
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (selectRef.current) {
            selectRef.current.focus();
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "flex flex-col",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "mb-1 w-full rounded border border-neutral-200 bg-transparent pr-2 text-neutral-900 dark:border-neutral-600 dark:text-white",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                ref: selectRef,
                className: "w-full cursor-pointer bg-transparent p-2",
                placeholder: t("Select a plugin") || "",
                value: plugin?.id || "",
                onChange: (e)=>{
                    onPluginChange(types_plugin/* PluginList */.xN.find((plugin)=>plugin.id === e.target.value));
                },
                onKeyDown: (e)=>{
                    handleKeyDown(e);
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                        value: "chatgpt",
                        className: "dark:bg-[#343541] dark:text-white",
                        children: "ChatGPT"
                    }, "chatgpt"),
                    types_plugin/* PluginList */.xN.map((plugin)=>/*#__PURE__*/ jsx_runtime.jsx("option", {
                            value: plugin.id,
                            className: "dark:bg-[#343541] dark:text-white",
                            children: plugin.name
                        }, plugin.id))
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./components/Chat/PromptList.tsx
var PromptList = __webpack_require__(1713);
// EXTERNAL MODULE: ./components/Chat/VariableModal.tsx
var VariableModal = __webpack_require__(3948);
;// CONCATENATED MODULE: ./components/Chat/ChatInput.tsx








const ChatInput = ({ onSend, onRegenerate, onScrollDownClick, stopConversationRef, textareaRef, showScrollDownButton })=>{
    const { t } = (0,external_next_i18next_.useTranslation)("chat");
    const { state: { selectedConversation, messageIsStreaming, prompts }, dispatch: homeDispatch } = (0,external_react_.useContext)(home_context["default"]);
    const [content, setContent] = (0,external_react_.useState)();
    const [isTyping, setIsTyping] = (0,external_react_.useState)(false);
    const [showPromptList, setShowPromptList] = (0,external_react_.useState)(false);
    const [activePromptIndex, setActivePromptIndex] = (0,external_react_.useState)(0);
    const [promptInputValue, setPromptInputValue] = (0,external_react_.useState)("");
    const [variables, setVariables] = (0,external_react_.useState)([]);
    const [isModalVisible, setIsModalVisible] = (0,external_react_.useState)(false);
    const [showPluginSelect, setShowPluginSelect] = (0,external_react_.useState)(false);
    const [plugin, setPlugin] = (0,external_react_.useState)(null);
    const promptListRef = (0,external_react_.useRef)(null);
    const filteredPrompts = prompts.filter((prompt)=>prompt.name.toLowerCase().includes(promptInputValue.toLowerCase()));
    const handleChange = (e)=>{
        const value = e.target.value;
        const maxLength = selectedConversation?.model.maxLength;
        if (maxLength && value.length > maxLength) {
            alert(t(`Message limit is {{maxLength}} characters. You have entered {{valueLength}} characters.`, {
                maxLength,
                valueLength: value.length
            }));
            return;
        }
        setContent(value);
        updatePromptListVisibility(value);
    };
    const handleSend = ()=>{
        if (messageIsStreaming) {
            return;
        }
        if (!content) {
            alert(t("Please enter a message"));
            return;
        }
        onSend({
            role: "user",
            content
        }, plugin);
        setContent("");
        setPlugin(null);
        if (window.innerWidth < 640 && textareaRef && textareaRef.current) {
            textareaRef.current.blur();
        }
    };
    const handleStopConversation = ()=>{
        stopConversationRef.current = true;
        setTimeout(()=>{
            stopConversationRef.current = false;
        }, 1000);
    };
    const isMobile = ()=>{
        const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
        const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;
        return mobileRegex.test(userAgent);
    };
    const handleInitModal = ()=>{
        const selectedPrompt = filteredPrompts[activePromptIndex];
        if (selectedPrompt) {
            setContent((prevContent)=>{
                const newContent = prevContent?.replace(/\/\w*$/, selectedPrompt.content);
                return newContent;
            });
            handlePromptSelect(selectedPrompt);
        }
        setShowPromptList(false);
    };
    const handleKeyDown = (e)=>{
        if (showPromptList) {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setActivePromptIndex((prevIndex)=>prevIndex < prompts.length - 1 ? prevIndex + 1 : prevIndex);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActivePromptIndex((prevIndex)=>prevIndex > 0 ? prevIndex - 1 : prevIndex);
            } else if (e.key === "Tab") {
                e.preventDefault();
                setActivePromptIndex((prevIndex)=>prevIndex < prompts.length - 1 ? prevIndex + 1 : 0);
            } else if (e.key === "Enter") {
                e.preventDefault();
                handleInitModal();
            } else if (e.key === "Escape") {
                e.preventDefault();
                setShowPromptList(false);
            } else {
                setActivePromptIndex(0);
            }
        } else if (e.key === "Enter" && !isTyping && !isMobile() && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        } else if (e.key === "/" && e.metaKey) {
            e.preventDefault();
            setShowPluginSelect(!showPluginSelect);
        }
    };
    const parseVariables = (content)=>{
        const regex = /{{(.*?)}}/g;
        const foundVariables = [];
        let match;
        while((match = regex.exec(content)) !== null){
            foundVariables.push(match[1]);
        }
        return foundVariables;
    };
    const updatePromptListVisibility = (0,external_react_.useCallback)((text)=>{
        const match = text.match(/\/\w*$/);
        if (match) {
            setShowPromptList(true);
            setPromptInputValue(match[0].slice(1));
        } else {
            setShowPromptList(false);
            setPromptInputValue("");
        }
    }, []);
    const handlePromptSelect = (prompt)=>{
        const parsedVariables = parseVariables(prompt.content);
        setVariables(parsedVariables);
        if (parsedVariables.length > 0) {
            setIsModalVisible(true);
        } else {
            setContent((prevContent)=>{
                const updatedContent = prevContent?.replace(/\/\w*$/, prompt.content);
                return updatedContent;
            });
            updatePromptListVisibility(prompt.content);
        }
    };
    const handleSubmit = (updatedVariables)=>{
        const newContent = content?.replace(/{{(.*?)}}/g, (match, variable)=>{
            const index = variables.indexOf(variable);
            return updatedVariables[index];
        });
        setContent(newContent);
        if (textareaRef && textareaRef.current) {
            textareaRef.current.focus();
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (promptListRef.current) {
            promptListRef.current.scrollTop = activePromptIndex * 30;
        }
    }, [
        activePromptIndex
    ]);
    (0,external_react_.useEffect)(()=>{
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = "inherit";
            textareaRef.current.style.height = `${textareaRef.current?.scrollHeight}px`;
            textareaRef.current.style.overflow = `${textareaRef?.current?.scrollHeight > 400 ? "auto" : "hidden"}`;
        }
    }, [
        content
    ]);
    (0,external_react_.useEffect)(()=>{
        const handleOutsideClick = (e)=>{
            if (promptListRef.current && !promptListRef.current.contains(e.target)) {
                setShowPromptList(false);
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return ()=>{
            window.removeEventListener("click", handleOutsideClick);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "absolute bottom-0 left-0 w-full border-transparent bg-gradient-to-b from-transparent via-white to-white pt-6 dark:border-white/20 dark:via-[#343541] dark:to-[#343541] md:pt-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "stretch mx-2 mt-4 flex flex-row gap-3 last:mb-2 md:mx-4 md:mt-[52px] md:last:mb-6 lg:mx-auto lg:max-w-3xl",
                children: [
                    messageIsStreaming && /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        className: "absolute top-0 left-0 right-0 mx-auto mb-3 flex w-fit items-center gap-3 rounded border border-neutral-200 bg-white py-2 px-4 text-black hover:opacity-50 dark:border-neutral-600 dark:bg-[#343541] dark:text-white md:mb-0 md:mt-2",
                        onClick: handleStopConversation,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconPlayerStop, {
                                size: 16
                            }),
                            " ",
                            t("Stop Generating")
                        ]
                    }),
                    !messageIsStreaming && selectedConversation && selectedConversation.messages.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        className: "absolute top-0 left-0 right-0 mx-auto mb-3 flex w-fit items-center gap-3 rounded border border-neutral-200 bg-white py-2 px-4 text-black hover:opacity-50 dark:border-neutral-600 dark:bg-[#343541] dark:text-white md:mb-0 md:mt-2",
                        onClick: onRegenerate,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconRepeat, {
                                size: 16
                            }),
                            " ",
                            t("Regenerate response")
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative mx-2 flex w-full flex-grow flex-col rounded-md border border-black/10 bg-white shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:border-gray-900/50 dark:bg-[#40414F] dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)] sm:mx-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "absolute left-2 top-2 rounded-sm p-1 text-neutral-800 opacity-60 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-opacity-50 dark:text-neutral-100 dark:hover:text-neutral-200",
                                onClick: ()=>setShowPluginSelect(!showPluginSelect),
                                onKeyDown: (e)=>{},
                                children: plugin ? /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconBrandGoogle, {
                                    size: 20
                                }) : /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconBolt, {
                                    size: 20
                                })
                            }),
                            showPluginSelect && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute left-0 bottom-14 rounded bg-white dark:bg-[#343541]",
                                children: /*#__PURE__*/ jsx_runtime.jsx(PluginSelect, {
                                    plugin: plugin,
                                    onKeyDown: (e)=>{
                                        if (e.key === "Escape") {
                                            e.preventDefault();
                                            setShowPluginSelect(false);
                                            textareaRef.current?.focus();
                                        }
                                    },
                                    onPluginChange: (plugin)=>{
                                        setPlugin(plugin);
                                        setShowPluginSelect(false);
                                        if (textareaRef && textareaRef.current) {
                                            textareaRef.current.focus();
                                        }
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                ref: textareaRef,
                                className: "m-0 w-full resize-none border-0 bg-transparent p-0 py-2 pr-8 pl-10 text-black dark:bg-transparent dark:text-white md:py-3 md:pl-10",
                                style: {
                                    resize: "none",
                                    bottom: `${textareaRef?.current?.scrollHeight}px`,
                                    maxHeight: "400px",
                                    overflow: `${textareaRef.current && textareaRef.current.scrollHeight > 400 ? "auto" : "hidden"}`
                                },
                                placeholder: t('Type a message or type "/" to select a prompt...') || "",
                                value: content,
                                rows: 1,
                                onCompositionStart: ()=>setIsTyping(true),
                                onCompositionEnd: ()=>setIsTyping(false),
                                onChange: handleChange,
                                onKeyDown: handleKeyDown
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "absolute right-2 top-2 rounded-sm p-1 text-neutral-800 opacity-60 hover:bg-neutral-200 hover:text-neutral-900 dark:bg-opacity-50 dark:text-neutral-100 dark:hover:text-neutral-200",
                                onClick: handleSend,
                                children: messageIsStreaming ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "h-4 w-4 animate-spin rounded-full border-t-2 border-neutral-800 opacity-60 dark:border-neutral-100"
                                }) : /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconSend, {
                                    size: 18
                                })
                            }),
                            showScrollDownButton && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute bottom-12 right-0 lg:bottom-0 lg:-right-10",
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "flex h-7 w-7 items-center justify-center rounded-full bg-neutral-300 text-gray-800 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-neutral-200",
                                    onClick: onScrollDownClick,
                                    children: /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconArrowDown, {
                                        size: 18
                                    })
                                })
                            }),
                            showPromptList && filteredPrompts.length > 0 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "absolute bottom-12 w-full",
                                children: /*#__PURE__*/ jsx_runtime.jsx(PromptList/* PromptList */.t, {
                                    activePromptIndex: activePromptIndex,
                                    prompts: filteredPrompts,
                                    onSelect: handleInitModal,
                                    onMouseOver: setActivePromptIndex,
                                    promptListRef: promptListRef
                                })
                            }),
                            isModalVisible && /*#__PURE__*/ jsx_runtime.jsx(VariableModal/* VariableModal */.g, {
                                prompt: filteredPrompts[activePromptIndex],
                                variables: variables,
                                onSubmit: handleSubmit,
                                onClose: ()=>setIsModalVisible(false)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "px-3 pt-2 pb-3 text-center text-[12px] text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "https://github.com/rulz-ai",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "underline",
                        children: "RULZ-AI"
                    }),
                    " ",
                    t("is an advanced chatbot kit for OpenAI's chat models aiming to mimic ChatGPT's interface and functionality.")
                ]
            })
        ]
    });
};


/***/ }),

/***/ 4149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ ChatLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);


const ChatLoader = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "group border-b border-black/10 bg-gray-50 text-gray-800 dark:border-gray-900/50 dark:bg-[#444654] dark:text-gray-100",
        style: {
            overflowWrap: "anywhere"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "m-auto flex gap-4 p-4 text-base md:max-w-2xl md:gap-6 md:py-6 lg:max-w-2xl lg:px-0 xl:max-w-3xl",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "min-w-[40px] items-end",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconRobot, {
                        size: 30,
                        style: {
                            transform: "rotate(45deg)",
                            color: "goldenrod"
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "animate-pulse cursor-default mt-1",
                    children: "▍"
                })
            ]
        })
    });
};


/***/ }),

/***/ 416:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ ChatMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_app_conversation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6236);
/* harmony import */ var _pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9965);
/* harmony import */ var _Markdown_CodeBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8885);
/* harmony import */ var _Markdown_MemoizedReactMarkdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2952);
/* harmony import */ var rehype_mathjax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(700);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6809);
/* harmony import */ var remark_math__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9832);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Markdown_MemoizedReactMarkdown__WEBPACK_IMPORTED_MODULE_6__, rehype_mathjax__WEBPACK_IMPORTED_MODULE_7__, remark_gfm__WEBPACK_IMPORTED_MODULE_8__, remark_math__WEBPACK_IMPORTED_MODULE_9__]);
([_Markdown_MemoizedReactMarkdown__WEBPACK_IMPORTED_MODULE_6__, rehype_mathjax__WEBPACK_IMPORTED_MODULE_7__, remark_gfm__WEBPACK_IMPORTED_MODULE_8__, remark_math__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const ChatMessage = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ message, messageIndex, onEdit })=>{
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("chat");
    const { state: { selectedConversation, conversations, currentMessage, messageIsStreaming }, dispatch: homeDispatch } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_4__["default"]);
    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isTyping, setIsTyping] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [messageContent, setMessageContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(message.content);
    const [messagedCopied, setMessageCopied] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const toggleEditing = ()=>{
        setIsEditing(!isEditing);
    };
    const handleInputChange = (event)=>{
        setMessageContent(event.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = "inherit";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };
    const handleEditMessage = ()=>{
        if (message.content != messageContent) {
            if (selectedConversation && onEdit) {
                onEdit({
                    ...message,
                    content: messageContent
                });
            }
        }
        setIsEditing(false);
    };
    const handleDeleteMessage = ()=>{
        if (!selectedConversation) return;
        const { messages } = selectedConversation;
        const findIndex = messages.findIndex((elm)=>elm === message);
        if (findIndex < 0) return;
        if (findIndex < messages.length - 1 && messages[findIndex + 1].role === "assistant") {
            messages.splice(findIndex, 2);
        } else {
            messages.splice(findIndex, 1);
        }
        const updatedConversation = {
            ...selectedConversation,
            messages
        };
        const { single, all } = (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_10__/* .updateConversation */ .X1)(updatedConversation, conversations);
        homeDispatch({
            field: "selectedConversation",
            value: single
        });
        homeDispatch({
            field: "conversations",
            value: all
        });
    };
    const handlePressEnter = (e)=>{
        if (e.key === "Enter" && !isTyping && !e.shiftKey) {
            e.preventDefault();
            handleEditMessage();
        }
    };
    const copyOnClick = ()=>{
        if (!navigator.clipboard) return;
        navigator.clipboard.writeText(message.content).then(()=>{
            setMessageCopied(true);
            setTimeout(()=>{
                setMessageCopied(false);
            }, 2000);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setMessageContent(message.content);
    }, [
        message.content
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (textareaRef.current) {
            textareaRef.current.style.height = "inherit";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [
        isEditing
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `group md:px-4 ${message.role === "assistant" ? "border-b border-black/10 bg-gray-50 text-gray-800 dark:border-gray-900/50 dark:bg-[#444654] dark:text-gray-100" : "border-b border-black/10 bg-white text-gray-800 dark:border-gray-900/50 dark:bg-[#343541] dark:text-gray-100"}`,
        style: {
            overflowWrap: "anywhere"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative m-auto flex p-4 text-base md:max-w-2xl md:gap-6 md:py-6 lg:max-w-2xl lg:px-0 xl:max-w-3xl",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "min-w-[40px] text-right font-bold",
                    children: message.role === "assistant" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "IconRobot.ico",
                        alt: "Assistant",
                        width: 25,
                        height: 25
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "IconUser.ico",
                        alt: "User",
                        width: 25,
                        height: 25
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "prose mt-[-2px] w-full dark:prose-invert",
                    children: message.role === "user" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex w-full",
                        children: [
                            isEditing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-full flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        ref: textareaRef,
                                        className: "w-full resize-none whitespace-pre-wrap border-none dark:bg-[#343541]",
                                        value: messageContent,
                                        onChange: handleInputChange,
                                        onKeyDown: handlePressEnter,
                                        onCompositionStart: ()=>setIsTyping(true),
                                        onCompositionEnd: ()=>setIsTyping(false),
                                        style: {
                                            fontFamily: "inherit",
                                            fontSize: "inherit",
                                            lineHeight: "inherit",
                                            padding: "0",
                                            margin: "0",
                                            overflow: "hidden"
                                        }
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-10 flex justify-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "h-[40px] rounded-md bg-blue-500 px-4 py-1 text-sm font-medium text-white enabled:hover:bg-blue-600 disabled:opacity-50",
                                                onClick: handleEditMessage,
                                                disabled: messageContent.trim().length <= 0,
                                                children: t("Save & Submit")
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "h-[40px] rounded-md border border-neutral-300 px-4 py-1 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800",
                                                onClick: ()=>{
                                                    setMessageContent(message.content);
                                                    setIsEditing(false);
                                                },
                                                children: t("Cancel")
                                            })
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "prose whitespace-pre-wrap dark:prose-invert flex-1",
                                children: message.content
                            }),
                            !isEditing && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "md:-mr-8 ml-1 md:ml-0 flex flex-col md:flex-row gap-4 md:gap-1 items-center md:items-start justify-end md:justify-start",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "invisible group-hover:visible focus:visible text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
                                        onClick: toggleEditing,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconEdit, {
                                            size: 20
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "invisible group-hover:visible focus:visible text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
                                        onClick: handleDeleteMessage,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconTrash, {
                                            size: 20
                                        })
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown_MemoizedReactMarkdown__WEBPACK_IMPORTED_MODULE_6__/* .MemoizedReactMarkdown */ .s, {
                                className: "prose dark:prose-invert flex-1",
                                remarkPlugins: [
                                    remark_gfm__WEBPACK_IMPORTED_MODULE_8__["default"],
                                    remark_math__WEBPACK_IMPORTED_MODULE_9__["default"]
                                ],
                                rehypePlugins: [
                                    rehype_mathjax__WEBPACK_IMPORTED_MODULE_7__["default"]
                                ],
                                components: {
                                    code ({ node, inline, className, children, ...props }) {
                                        if (children.length) {
                                            if (children[0] == "▍") {
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "animate-pulse cursor-default mt-1",
                                                    children: "▍"
                                                });
                                            }
                                            children[0] = children[0].replace("`▍`", "▍");
                                        }
                                        const match = /language-(\w+)/.exec(className || "");
                                        return !inline ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Markdown_CodeBlock__WEBPACK_IMPORTED_MODULE_5__/* .CodeBlock */ .d, {
                                            language: match && match[1] || "",
                                            value: String(children).replace(/\n$/, ""),
                                            ...props
                                        }, Math.random()) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                            className: className,
                                            ...props,
                                            children: children
                                        });
                                    },
                                    table ({ children }) {
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                            className: "border-collapse border border-black px-3 py-1 dark:border-white",
                                            children: children
                                        });
                                    },
                                    th ({ children }) {
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                            className: "break-words border border-black bg-gray-500 px-3 py-1 text-white dark:border-white",
                                            children: children
                                        });
                                    },
                                    td ({ children }) {
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "break-words border border-black px-3 py-1 dark:border-white",
                                            children: children
                                        });
                                    }
                                },
                                children: `${message.content}${messageIsStreaming && messageIndex == (selectedConversation?.messages.length ?? 0) - 1 ? "`▍`" : ""}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "md:-mr-8 ml-1 md:ml-0 flex flex-col md:flex-row gap-4 md:gap-1 items-center md:items-start justify-end md:justify-start",
                                children: messagedCopied ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconCheck, {
                                    size: 20,
                                    className: "text-green-500 dark:text-green-400"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "invisible group-hover:visible focus:visible text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
                                    onClick: copyOnClick,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconCopy, {
                                        size: 20
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
});
ChatMessage.displayName = "ChatMessage";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ ErrorMessageDiv)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);


const ErrorMessageDiv = ({ error })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mx-6 flex h-full flex-col items-center justify-center text-red-500",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconCircleX, {
                    size: 36
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-3 text-2xl font-medium",
                children: error.title
            }),
            error.messageLines.map((line, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center",
                    children: [
                        " ",
                        line,
                        " "
                    ]
                }, index)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-4 text-xs opacity-50 dark:text-red-400",
                children: error.code ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("i", {
                    children: [
                        "Code: ",
                        error.code
                    ]
                }) : ""
            })
        ]
    });
};


/***/ }),

/***/ 4117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ MemoizedChatMessage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChatMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(416);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChatMessage__WEBPACK_IMPORTED_MODULE_1__]);
_ChatMessage__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const MemoizedChatMessage = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(_ChatMessage__WEBPACK_IMPORTED_MODULE_1__/* .ChatMessage */ .J, (prevProps, nextProps)=>prevProps.message.content === nextProps.message.content);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ ModelSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9965);





const ModelSelect = ()=>{
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("chat");
    const { state: { selectedConversation, models, defaultModelId }, handleUpdateConversation, dispatch: homeDispatch } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_4__["default"]);
    const handleChange = (e)=>{
        selectedConversation && handleUpdateConversation(selectedConversation, {
            key: "model",
            value: models.find((model)=>model.id === e.target.value)
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "mb-2 text-left text-neutral-700 dark:text-neutral-400",
                children: t("Model")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full rounded-lg border border-neutral-200 bg-transparent pr-2 text-neutral-900 dark:border-neutral-600 dark:text-white",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                    className: "w-full bg-transparent p-2",
                    placeholder: t("Select a model") || "",
                    value: selectedConversation?.model?.id || defaultModelId,
                    onChange: handleChange,
                    children: models.map((model)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: model.id,
                            className: "dark:bg-[#343541] dark:text-white",
                            children: model.id === defaultModelId ? `Default (${model.name})` : model.name
                        }, model.id))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full mt-3 text-left text-neutral-700 dark:text-neutral-400 flex items-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: "https://platform.openai.com/account/usage",
                    target: "_blank",
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconExternalLink, {
                            size: 18,
                            className: "inline mr-1"
                        }),
                        t("View Account Usage")
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 1713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ PromptList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);

const PromptList = ({ prompts, activePromptIndex, onSelect, onMouseOver, promptListRef })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        ref: promptListRef,
        className: "z-10 max-h-52 w-full overflow-scroll rounded border border-black/10 bg-white shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:border-neutral-500 dark:bg-[#343541] dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]",
        children: prompts.map((prompt, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `${index === activePromptIndex ? "bg-gray-200 dark:bg-[#202123] dark:text-black" : ""} cursor-pointer px-3 py-2 text-sm text-black dark:text-white`,
                onClick: (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    onSelect();
                },
                onMouseEnter: ()=>onMouseOver(index),
                children: prompt.name
            }, prompt.id))
    });
};


/***/ }),

/***/ 8894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ SystemPrompt)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_app_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8219);
/* harmony import */ var _PromptList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1713);
/* harmony import */ var _VariableModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3948);






const SystemPrompt = ({ conversation, prompts, onChangePrompt })=>{
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("chat");
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [activePromptIndex, setActivePromptIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [showPromptList, setShowPromptList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [promptInputValue, setPromptInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [variables, setVariables] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const promptListRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const filteredPrompts = prompts.filter((prompt)=>prompt.name.toLowerCase().includes(promptInputValue.toLowerCase()));
    const handleChange = (e)=>{
        const value = e.target.value;
        const maxLength = conversation.model.maxLength;
        if (value.length > maxLength) {
            alert(t(`Prompt limit is {{maxLength}} characters. You have entered {{valueLength}} characters.`, {
                maxLength,
                valueLength: value.length
            }));
            return;
        }
        setValue(value);
        updatePromptListVisibility(value);
        if (value.length > 0) {
            onChangePrompt(value);
        }
    };
    const handleInitModal = ()=>{
        const selectedPrompt = filteredPrompts[activePromptIndex];
        setValue((prevVal)=>{
            const newContent = prevVal?.replace(/\/\w*$/, selectedPrompt.content);
            return newContent;
        });
        handlePromptSelect(selectedPrompt);
        setShowPromptList(false);
    };
    const parseVariables = (content)=>{
        const regex = /{{(.*?)}}/g;
        const foundVariables = [];
        let match;
        while((match = regex.exec(content)) !== null){
            foundVariables.push(match[1]);
        }
        return foundVariables;
    };
    const updatePromptListVisibility = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((text)=>{
        const match = text.match(/\/\w*$/);
        if (match) {
            setShowPromptList(true);
            setPromptInputValue(match[0].slice(1));
        } else {
            setShowPromptList(false);
            setPromptInputValue("");
        }
    }, []);
    const handlePromptSelect = (prompt)=>{
        const parsedVariables = parseVariables(prompt.content);
        setVariables(parsedVariables);
        if (parsedVariables.length > 0) {
            setIsModalVisible(true);
        } else {
            const updatedContent = value?.replace(/\/\w*$/, prompt.content);
            setValue(updatedContent);
            onChangePrompt(updatedContent);
            updatePromptListVisibility(prompt.content);
        }
    };
    const handleSubmit = (updatedVariables)=>{
        const newContent = value?.replace(/{{(.*?)}}/g, (match, variable)=>{
            const index = variables.indexOf(variable);
            return updatedVariables[index];
        });
        setValue(newContent);
        onChangePrompt(newContent);
        if (textareaRef && textareaRef.current) {
            textareaRef.current.focus();
        }
    };
    const handleKeyDown = (e)=>{
        if (showPromptList) {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setActivePromptIndex((prevIndex)=>prevIndex < prompts.length - 1 ? prevIndex + 1 : prevIndex);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActivePromptIndex((prevIndex)=>prevIndex > 0 ? prevIndex - 1 : prevIndex);
            } else if (e.key === "Tab") {
                e.preventDefault();
                setActivePromptIndex((prevIndex)=>prevIndex < prompts.length - 1 ? prevIndex + 1 : 0);
            } else if (e.key === "Enter") {
                e.preventDefault();
                handleInitModal();
            } else if (e.key === "Escape") {
                e.preventDefault();
                setShowPromptList(false);
            } else {
                setActivePromptIndex(0);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = "inherit";
            textareaRef.current.style.height = `${textareaRef.current?.scrollHeight}px`;
        }
    }, [
        value
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (conversation.prompt) {
            setValue(conversation.prompt);
        } else {
            setValue(_utils_app_const__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_SYSTEM_PROMPT */ .cl);
        }
    }, [
        conversation
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleOutsideClick = (e)=>{
            if (promptListRef.current && !promptListRef.current.contains(e.target)) {
                setShowPromptList(false);
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return ()=>{
            window.removeEventListener("click", handleOutsideClick);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "mb-2 text-left text-neutral-700 dark:text-neutral-400",
                children: t("System Prompt")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                ref: textareaRef,
                className: "w-full rounded-lg border border-neutral-200 bg-transparent px-4 py-3 text-neutral-900 dark:border-neutral-600 dark:text-neutral-100",
                style: {
                    resize: "none",
                    bottom: `${textareaRef?.current?.scrollHeight}px`,
                    maxHeight: "300px",
                    overflow: `${textareaRef.current && textareaRef.current.scrollHeight > 400 ? "auto" : "hidden"}`
                },
                placeholder: t(`Enter a prompt or type "/" to select a prompt...`) || "",
                value: t(value) || "",
                rows: 1,
                onChange: handleChange,
                onKeyDown: handleKeyDown
            }),
            showPromptList && filteredPrompts.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PromptList__WEBPACK_IMPORTED_MODULE_4__/* .PromptList */ .t, {
                    activePromptIndex: activePromptIndex,
                    prompts: filteredPrompts,
                    onSelect: handleInitModal,
                    onMouseOver: setActivePromptIndex,
                    promptListRef: promptListRef
                })
            }),
            isModalVisible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VariableModal__WEBPACK_IMPORTED_MODULE_5__/* .VariableModal */ .g, {
                prompt: prompts[activePromptIndex],
                variables: variables,
                onSubmit: handleSubmit,
                onClose: ()=>setIsModalVisible(false)
            })
        ]
    });
};


/***/ }),

/***/ 7716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ TemperatureSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_app_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8219);
/* harmony import */ var _pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9965);





const TemperatureSlider = ({ label, onChangeTemperature })=>{
    const { state: { conversations } } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_4__["default"]);
    const lastConversation = conversations[conversations.length - 1];
    const [temperature, setTemperature] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(lastConversation?.temperature ?? _utils_app_const__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_TEMPERATURE */ .Ar);
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("chat");
    const handleChange = (event)=>{
        const newValue = parseFloat(event.target.value);
        setTemperature(newValue);
        onChangeTemperature(newValue);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "mb-2 text-left text-neutral-700 dark:text-neutral-400",
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-[12px] text-black/50 dark:text-white/50 text-sm",
                children: t("Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "mt-2 mb-1 text-center text-neutral-900 dark:text-neutral-100",
                children: temperature.toFixed(1)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: "cursor-pointer",
                type: "range",
                min: 0,
                max: 1,
                step: 0.1,
                value: temperature,
                defaultValue: 0.5,
                onChange: handleChange
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "w mt-2 pb-8 flex justify-between px-[24px] text-neutral-900 dark:text-neutral-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "absolute",
                            children: t("Precise")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "absolute",
                            children: t("Neutral")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "absolute",
                            children: t("Creative")
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 3948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ VariableModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const VariableModal = ({ prompt, variables, onSubmit, onClose })=>{
    const [updatedVariables, setUpdatedVariables] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(variables.map((variable)=>({
            key: variable,
            value: ""
        })).filter((item, index, array)=>array.findIndex((t)=>t.key === item.key) === index));
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const nameInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleChange = (index, value)=>{
        setUpdatedVariables((prev)=>{
            const updated = [
                ...prev
            ];
            updated[index].value = value;
            return updated;
        });
    };
    const handleSubmit = ()=>{
        if (updatedVariables.some((variable)=>variable.value === "")) {
            alert("Please fill out all variables");
            return;
        }
        onSubmit(updatedVariables.map((variable)=>variable.value));
        onClose();
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        } else if (e.key === "Escape") {
            onClose();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleOutsideClick = (e)=>{
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return ()=>{
            window.removeEventListener("click", handleOutsideClick);
        };
    }, [
        onClose
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (nameInputRef.current) {
            nameInputRef.current.focus();
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
        onKeyDown: handleKeyDown,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            ref: modalRef,
            className: "dark:border-netural-400 inline-block max-h-[400px] transform overflow-y-auto rounded-lg border border-gray-300 bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-[#202123] sm:my-8 sm:max-h-[600px] sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
            role: "dialog",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-4 text-xl font-bold text-black dark:text-neutral-200",
                    children: prompt.name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-4 text-sm italic text-black dark:text-neutral-200",
                    children: prompt.description
                }),
                updatedVariables.map((variable, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-2 text-sm font-bold text-neutral-200",
                                children: variable.key
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                ref: index === 0 ? nameInputRef : undefined,
                                className: "mt-1 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-[#40414F] dark:text-neutral-100",
                                style: {
                                    resize: "none"
                                },
                                placeholder: `Enter a value for ${variable.key}...`,
                                value: variable.value,
                                onChange: (e)=>handleChange(index, e.target.value),
                                rows: 3
                            })
                        ]
                    }, index)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "mt-6 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow hover:bg-neutral-100 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-300",
                    onClick: handleSubmit,
                    children: "Submit"
                })
            ]
        })
    });
};


/***/ }),

/***/ 8072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ChatbarContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbarContext);


/***/ }),

/***/ 5994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ initialState)
/* harmony export */ });
const initialState = {
    searchTerm: "",
    filteredConversations: []
};


/***/ }),

/***/ 8151:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ Chatbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useCreateReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6094);
/* harmony import */ var _utils_app_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8219);
/* harmony import */ var _utils_app_conversation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6236);
/* harmony import */ var _utils_app_folders__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2815);
/* harmony import */ var _utils_app_importExport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1101);
/* harmony import */ var _types_openai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7070);
/* harmony import */ var _pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9965);
/* harmony import */ var _components_ChatFolders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6083);
/* harmony import */ var _components_ChatbarSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4440);
/* harmony import */ var _components_Conversations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8674);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8578);
/* harmony import */ var _Chatbar_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8072);
/* harmony import */ var _Chatbar_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5994);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_app_importExport__WEBPACK_IMPORTED_MODULE_5__, _types_openai__WEBPACK_IMPORTED_MODULE_6__, _components_ChatbarSettings__WEBPACK_IMPORTED_MODULE_9__, _Sidebar__WEBPACK_IMPORTED_MODULE_11__, uuid__WEBPACK_IMPORTED_MODULE_14__]);
([_utils_app_importExport__WEBPACK_IMPORTED_MODULE_5__, _types_openai__WEBPACK_IMPORTED_MODULE_6__, _components_ChatbarSettings__WEBPACK_IMPORTED_MODULE_9__, _Sidebar__WEBPACK_IMPORTED_MODULE_11__, uuid__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const Chatbar = ()=>{
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("sidebar");
    const chatBarContextValue = (0,_hooks_useCreateReducer__WEBPACK_IMPORTED_MODULE_3__/* .useCreateReducer */ .L)({
        initialState: _Chatbar_state__WEBPACK_IMPORTED_MODULE_13__/* .initialState */ .E
    });
    const { state: { conversations, showChatbar, defaultModelId, folders, pluginKeys }, dispatch: homeDispatch, handleCreateFolder, handleNewConversation, handleUpdateConversation } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_7__["default"]);
    const { state: { searchTerm, filteredConversations }, dispatch: chatDispatch } = chatBarContextValue;
    const handleApiKeyChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((apiKey)=>{
        homeDispatch({
            field: "apiKey",
            value: apiKey
        });
        localStorage.setItem("apiKey", apiKey);
    }, [
        homeDispatch
    ]);
    const handlePluginKeyChange = (pluginKey)=>{
        if (pluginKeys.some((key)=>key.pluginId === pluginKey.pluginId)) {
            const updatedPluginKeys = pluginKeys.map((key)=>{
                if (key.pluginId === pluginKey.pluginId) {
                    return pluginKey;
                }
                return key;
            });
            homeDispatch({
                field: "pluginKeys",
                value: updatedPluginKeys
            });
            localStorage.setItem("pluginKeys", JSON.stringify(updatedPluginKeys));
        } else {
            homeDispatch({
                field: "pluginKeys",
                value: [
                    ...pluginKeys,
                    pluginKey
                ]
            });
            localStorage.setItem("pluginKeys", JSON.stringify([
                ...pluginKeys,
                pluginKey
            ]));
        }
    };
    const handleClearPluginKey = (pluginKey)=>{
        const updatedPluginKeys = pluginKeys.filter((key)=>key.pluginId !== pluginKey.pluginId);
        if (updatedPluginKeys.length === 0) {
            homeDispatch({
                field: "pluginKeys",
                value: []
            });
            localStorage.removeItem("pluginKeys");
            return;
        }
        homeDispatch({
            field: "pluginKeys",
            value: updatedPluginKeys
        });
        localStorage.setItem("pluginKeys", JSON.stringify(updatedPluginKeys));
    };
    const handleExportData = ()=>{
        (0,_utils_app_importExport__WEBPACK_IMPORTED_MODULE_5__/* .exportData */ .u1)();
    };
    const handleImportConversations = (data)=>{
        const { history, folders, prompts } = (0,_utils_app_importExport__WEBPACK_IMPORTED_MODULE_5__/* .importData */ .dk)(data);
        homeDispatch({
            field: "conversations",
            value: history
        });
        homeDispatch({
            field: "selectedConversation",
            value: history[history.length - 1]
        });
        homeDispatch({
            field: "folders",
            value: folders
        });
        homeDispatch({
            field: "prompts",
            value: prompts
        });
        window.location.reload();
    };
    const handleClearConversations = ()=>{
        defaultModelId && homeDispatch({
            field: "selectedConversation",
            value: {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_14__.v4)(),
                name: t("New Conversation"),
                messages: [],
                model: _types_openai__WEBPACK_IMPORTED_MODULE_6__/* .OpenAIModels */ .MU[defaultModelId],
                prompt: _utils_app_const__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_SYSTEM_PROMPT */ .cl,
                temperature: _utils_app_const__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_TEMPERATURE */ .Ar,
                folderId: null
            }
        });
        homeDispatch({
            field: "conversations",
            value: []
        });
        localStorage.removeItem("conversationHistory");
        localStorage.removeItem("selectedConversation");
        const updatedFolders = folders.filter((f)=>f.type !== "chat");
        homeDispatch({
            field: "folders",
            value: updatedFolders
        });
        (0,_utils_app_folders__WEBPACK_IMPORTED_MODULE_15__/* .saveFolders */ ._)(updatedFolders);
    };
    const handleDeleteConversation = (conversation)=>{
        const updatedConversations = conversations.filter((c)=>c.id !== conversation.id);
        homeDispatch({
            field: "conversations",
            value: updatedConversations
        });
        chatDispatch({
            field: "searchTerm",
            value: ""
        });
        (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_16__/* .saveConversations */ .fB)(updatedConversations);
        if (updatedConversations.length > 0) {
            homeDispatch({
                field: "selectedConversation",
                value: updatedConversations[updatedConversations.length - 1]
            });
            (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_16__/* .saveConversation */ .m7)(updatedConversations[updatedConversations.length - 1]);
        } else {
            defaultModelId && homeDispatch({
                field: "selectedConversation",
                value: {
                    id: (0,uuid__WEBPACK_IMPORTED_MODULE_14__.v4)(),
                    name: t("New Conversation"),
                    messages: [],
                    model: _types_openai__WEBPACK_IMPORTED_MODULE_6__/* .OpenAIModels */ .MU[defaultModelId],
                    prompt: _utils_app_const__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_SYSTEM_PROMPT */ .cl,
                    temperature: _utils_app_const__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_TEMPERATURE */ .Ar,
                    folderId: null
                }
            });
            localStorage.removeItem("selectedConversation");
        }
    };
    const handleToggleChatbar = ()=>{
        homeDispatch({
            field: "showChatbar",
            value: !showChatbar
        });
        localStorage.setItem("showChatbar", JSON.stringify(!showChatbar));
    };
    const handleDrop = (e)=>{
        if (e.dataTransfer) {
            const conversation = JSON.parse(e.dataTransfer.getData("conversation"));
            handleUpdateConversation(conversation, {
                key: "folderId",
                value: 0
            });
            chatDispatch({
                field: "searchTerm",
                value: ""
            });
            e.target.style.background = "none";
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (searchTerm) {
            chatDispatch({
                field: "filteredConversations",
                value: conversations.filter((conversation)=>{
                    const searchable = conversation.name.toLocaleLowerCase() + " " + conversation.messages.map((message)=>message.content).join(" ");
                    return searchable.toLowerCase().includes(searchTerm.toLowerCase());
                })
            });
        } else {
            chatDispatch({
                field: "filteredConversations",
                value: conversations
            });
        }
    }, [
        searchTerm,
        conversations
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Chatbar_context__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z.Provider, {
        value: {
            ...chatBarContextValue,
            handleDeleteConversation,
            handleClearConversations,
            handleImportConversations,
            handleExportData,
            handlePluginKeyChange,
            handleClearPluginKey,
            handleApiKeyChange
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            side: "left",
            isOpen: showChatbar,
            addItemButtonTitle: t("New chat"),
            itemComponent: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Conversations__WEBPACK_IMPORTED_MODULE_10__/* .Conversations */ .o, {
                conversations: filteredConversations
            }),
            folderComponent: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ChatFolders__WEBPACK_IMPORTED_MODULE_8__/* .ChatFolders */ .O, {
                searchTerm: searchTerm
            }),
            items: filteredConversations,
            searchTerm: searchTerm,
            handleSearchTerm: (searchTerm)=>chatDispatch({
                    field: "searchTerm",
                    value: searchTerm
                }),
            toggleOpen: handleToggleChatbar,
            handleCreateItem: handleNewConversation,
            handleCreateFolder: ()=>handleCreateFolder(t("New folder"), "chat"),
            handleDrop: handleDrop,
            footerComponent: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ChatbarSettings__WEBPACK_IMPORTED_MODULE_9__/* .ChatbarSettings */ .M, {})
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ ChatFolders)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9965);
/* harmony import */ var _components_Folder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2283);
/* harmony import */ var _Conversation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4270);





const ChatFolders = ({ searchTerm })=>{
    const { state: { folders, conversations }, handleUpdateConversation } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const handleDrop = (e, folder)=>{
        if (e.dataTransfer) {
            const conversation = JSON.parse(e.dataTransfer.getData("conversation"));
            handleUpdateConversation(conversation, {
                key: "folderId",
                value: folder.id
            });
        }
    };
    const ChatFolders = (currentFolder)=>{
        return conversations && conversations.filter((conversation)=>conversation.folderId).map((conversation, index)=>{
            if (conversation.folderId === currentFolder.id) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "ml-5 gap-2 border-l pl-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Conversation__WEBPACK_IMPORTED_MODULE_4__/* .ConversationComponent */ .S, {
                        conversation: conversation
                    })
                }, index);
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex w-full flex-col pt-2",
        children: folders.filter((folder)=>folder.type === "chat").sort((a, b)=>a.name.localeCompare(b.name)).map((folder, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Folder__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                searchTerm: searchTerm,
                currentFolder: folder,
                handleDrop: handleDrop,
                folderComponent: ChatFolders(folder)
            }, index))
    });
};


/***/ }),

/***/ 4440:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ ChatbarSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9965);
/* harmony import */ var _components_Settings_SettingDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3240);
/* harmony import */ var _Settings_Import__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1831);
/* harmony import */ var _Settings_Key__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3995);
/* harmony import */ var _Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9884);
/* harmony import */ var _Chatbar_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8072);
/* harmony import */ var _ClearConversations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8359);
/* harmony import */ var _PluginKeys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7952);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PluginKeys__WEBPACK_IMPORTED_MODULE_11__]);
_PluginKeys__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const ChatbarSettings = ()=>{
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("sidebar");
    const [isSettingDialogOpen, setIsSettingDialog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { state: { apiKey, lightMode, serverSideApiKeyIsSet, serverSidePluginKeysSet, conversations }, dispatch: homeDispatch } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_4__["default"]);
    const { handleClearConversations, handleImportConversations, handleExportData, handleApiKeyChange } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Chatbar_context__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center space-y-1 border-t border-white/20 pt-1 text-sm",
        children: [
            conversations.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ClearConversations__WEBPACK_IMPORTED_MODULE_10__/* .ClearConversations */ .h, {
                onClearConversations: handleClearConversations
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Settings_Import__WEBPACK_IMPORTED_MODULE_6__/* .Import */ .b, {
                onImport: handleImportConversations
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_8__/* .SidebarButton */ .f, {
                text: t("Export data"),
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconFileExport, {
                    size: 18
                }),
                onClick: ()=>handleExportData()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_8__/* .SidebarButton */ .f, {
                text: t("Settings"),
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconSettings, {
                    size: 18
                }),
                onClick: ()=>setIsSettingDialog(true)
            }),
            !serverSideApiKeyIsSet ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Settings_Key__WEBPACK_IMPORTED_MODULE_7__/* .Key */ .s, {
                apiKey: apiKey,
                onApiKeyChange: handleApiKeyChange
            }) : null,
            !serverSidePluginKeysSet ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PluginKeys__WEBPACK_IMPORTED_MODULE_11__/* .PluginKeys */ .A, {}) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Settings_SettingDialog__WEBPACK_IMPORTED_MODULE_5__/* .SettingDialog */ .O, {
                open: isSettingDialogOpen,
                onClose: ()=>{
                    setIsSettingDialog(false);
                }
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ ClearConversations)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9884);





const ClearConversations = ({ onClearConversations })=>{
    const [isConfirming, setIsConfirming] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("sidebar");
    const handleClearConversations = ()=>{
        onClearConversations();
        setIsConfirming(false);
    };
    return isConfirming ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex w-full cursor-pointer items-center rounded-lg py-3 px-3 hover:bg-gray-500/10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconTrash, {
                size: 18
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "ml-3 flex-1 text-left text-[12.5px] leading-3 text-white",
                children: t("Are you sure?")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-[40px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconCheck, {
                        className: "ml-auto mr-1 min-w-[20px] text-neutral-400 hover:text-neutral-100",
                        size: 18,
                        onClick: (e)=>{
                            e.stopPropagation();
                            handleClearConversations();
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconX, {
                        className: "ml-auto min-w-[20px] text-neutral-400 hover:text-neutral-100",
                        size: 18,
                        onClick: (e)=>{
                            e.stopPropagation();
                            setIsConfirming(false);
                        }
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_4__/* .SidebarButton */ .f, {
        text: t("Clear conversations"),
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconTrash, {
            size: 18
        }),
        onClick: ()=>setIsConfirming(true)
    });
};


/***/ }),

/***/ 4270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ ConversationComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9965);
/* harmony import */ var _components_Buttons_SidebarActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2347);
/* harmony import */ var _components_Chatbar_Chatbar_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8072);






const ConversationComponent = ({ conversation })=>{
    const { state: { selectedConversation, messageIsStreaming }, handleSelectConversation, handleUpdateConversation } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
    const { handleDeleteConversation } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_components_Chatbar_Chatbar_context__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    const [isDeleting, setIsDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isRenaming, setIsRenaming] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [renameValue, setRenameValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const handleEnterDown = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            selectedConversation && handleRename(selectedConversation);
        }
    };
    const handleDragStart = (e, conversation)=>{
        if (e.dataTransfer) {
            e.dataTransfer.setData("conversation", JSON.stringify(conversation));
        }
    };
    const handleRename = (conversation)=>{
        if (renameValue.trim().length > 0) {
            handleUpdateConversation(conversation, {
                key: "name",
                value: renameValue
            });
            setRenameValue("");
            setIsRenaming(false);
        }
    };
    const handleConfirm = (e)=>{
        e.stopPropagation();
        if (isDeleting) {
            handleDeleteConversation(conversation);
        } else if (isRenaming) {
            handleRename(conversation);
        }
        setIsDeleting(false);
        setIsRenaming(false);
    };
    const handleCancel = (e)=>{
        e.stopPropagation();
        setIsDeleting(false);
        setIsRenaming(false);
    };
    const handleOpenRenameModal = (e)=>{
        e.stopPropagation();
        setIsRenaming(true);
        selectedConversation && setRenameValue(selectedConversation.name);
    };
    const handleOpenDeleteModal = (e)=>{
        e.stopPropagation();
        setIsDeleting(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (isRenaming) {
            setIsDeleting(false);
        } else if (isDeleting) {
            setIsRenaming(false);
        }
    }, [
        isRenaming,
        isDeleting
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex items-center",
        children: [
            isRenaming && selectedConversation?.id === conversation.id ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full items-center gap-3 rounded-lg bg-[#343541]/90 p-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconMessage, {
                        size: 18
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        className: "mr-12 flex-1 overflow-hidden overflow-ellipsis border-neutral-400 bg-transparent text-left text-[12.5px] leading-3 text-white outline-none focus:border-neutral-100",
                        type: "text",
                        value: renameValue,
                        onChange: (e)=>setRenameValue(e.target.value),
                        onKeyDown: handleEnterDown,
                        autoFocus: true
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: `flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 text-sm transition-colors duration-200 hover:bg-[#343541]/90 ${messageIsStreaming ? "disabled:cursor-not-allowed" : ""} ${selectedConversation?.id === conversation.id ? "bg-[#343541]/90" : ""}`,
                onClick: ()=>handleSelectConversation(conversation),
                disabled: messageIsStreaming,
                draggable: "true",
                onDragStart: (e)=>handleDragStart(e, conversation),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconMessage, {
                        size: 18
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `relative max-h-5 flex-1 overflow-hidden text-ellipsis whitespace-nowrap break-all text-left text-[12.5px] leading-3 ${selectedConversation?.id === conversation.id ? "pr-12" : "pr-1"}`,
                        children: conversation.name
                    })
                ]
            }),
            (isDeleting || isRenaming) && selectedConversation?.id === conversation.id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute right-1 z-10 flex text-gray-300",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Buttons_SidebarActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        handleClick: handleConfirm,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconCheck, {
                            size: 18
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Buttons_SidebarActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        handleClick: handleCancel,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconX, {
                            size: 18
                        })
                    })
                ]
            }),
            selectedConversation?.id === conversation.id && !isDeleting && !isRenaming && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute right-1 z-10 flex text-gray-300",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Buttons_SidebarActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        handleClick: handleOpenRenameModal,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconPencil, {
                            size: 18
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Buttons_SidebarActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        handleClick: handleOpenDeleteModal,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconTrash, {
                            size: 18
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 8674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ Conversations)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var _Conversation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4270);


const Conversations = ({ conversations })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex w-full flex-col gap-1",
        children: conversations.filter((conversation)=>!conversation.folderId).slice().reverse().map((conversation, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Conversation__WEBPACK_IMPORTED_MODULE_1__/* .ConversationComponent */ .S, {
                conversation: conversation
            }, index))
    });
};


/***/ }),

/***/ 7952:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PluginKeys)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7987);
/* harmony import */ var _types_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4597);
/* harmony import */ var _pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9965);
/* harmony import */ var _components_Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9884);
/* harmony import */ var _Chatbar_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8072);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_3__]);
react_i18next__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const PluginKeys = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("sidebar");
    const { state: { pluginKeys } } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_5__["default"]);
    const { handlePluginKeyChange, handleClearPluginKey } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Chatbar_context__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    const [isChanging, setIsChanging] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const handleEnter = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            setIsChanging(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleMouseDown = (e)=>{
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                window.addEventListener("mouseup", handleMouseUp);
            }
        };
        const handleMouseUp = (e)=>{
            window.removeEventListener("mouseup", handleMouseUp);
            setIsChanging(false);
        };
        window.addEventListener("mousedown", handleMouseDown);
        return ()=>{
            window.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_6__/* .SidebarButton */ .f, {
                text: t("Plugin Keys"),
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconKey, {
                    size: 18
                }),
                onClick: ()=>setIsChanging(true)
            }),
            isChanging && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "z-100 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",
                onKeyDown: handleEnter,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed inset-0 z-10 overflow-hidden",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hidden sm:inline-block sm:h-screen sm:align-middle",
                                "aria-hidden": "true"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                ref: modalRef,
                                className: "dark:border-netural-400 inline-block max-h-[400px] transform overflow-y-auto rounded-lg border border-gray-300 bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-[#202123] sm:my-8 sm:max-h-[600px] sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
                                role: "dialog",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mb-10 text-4xl",
                                        children: "Plugin Keys"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-6 rounded border p-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-xl font-bold",
                                                children: "Google Search Plugin"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-4 italic",
                                                children: "Please enter your Google API Key and Google CSE ID to enable the Google Search Plugin."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-6 text-sm font-bold text-black dark:text-neutral-200",
                                                children: "Google API Key"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "mt-2 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-[#40414F] dark:text-neutral-100",
                                                type: "password",
                                                value: pluginKeys.find((p)=>p.pluginId === _types_plugin__WEBPACK_IMPORTED_MODULE_4__/* .PluginID */ .PO.GOOGLE_SEARCH)?.requiredKeys.find((k)=>k.key === "GOOGLE_API_KEY")?.value,
                                                onChange: (e)=>{
                                                    const pluginKey = pluginKeys.find((p)=>p.pluginId === _types_plugin__WEBPACK_IMPORTED_MODULE_4__/* .PluginID */ .PO.GOOGLE_SEARCH);
                                                    if (pluginKey) {
                                                        const requiredKey = pluginKey.requiredKeys.find((k)=>k.key === "GOOGLE_API_KEY");
                                                        if (requiredKey) {
                                                            const updatedPluginKey = {
                                                                ...pluginKey,
                                                                requiredKeys: pluginKey.requiredKeys.map((k)=>{
                                                                    if (k.key === "GOOGLE_API_KEY") {
                                                                        return {
                                                                            ...k,
                                                                            value: e.target.value
                                                                        };
                                                                    }
                                                                    return k;
                                                                })
                                                            };
                                                            handlePluginKeyChange(updatedPluginKey);
                                                        }
                                                    } else {
                                                        const newPluginKey = {
                                                            pluginId: _types_plugin__WEBPACK_IMPORTED_MODULE_4__/* .PluginID */ .PO.GOOGLE_SEARCH,
                                                            requiredKeys: [
                                                                {
                                                                    key: "GOOGLE_API_KEY",
                                                                    value: e.target.value
                                                                },
                                                                {
                                                                    key: "GOOGLE_CSE_ID",
                                                                    value: ""
                                                                }
                                                            ]
                                                        };
                                                        handlePluginKeyChange(newPluginKey);
                                                    }
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-6 text-sm font-bold text-black dark:text-neutral-200",
                                                children: "Google CSE ID"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "mt-2 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-[#40414F] dark:text-neutral-100",
                                                type: "password",
                                                value: pluginKeys.find((p)=>p.pluginId === _types_plugin__WEBPACK_IMPORTED_MODULE_4__/* .PluginID */ .PO.GOOGLE_SEARCH)?.requiredKeys.find((k)=>k.key === "GOOGLE_CSE_ID")?.value,
                                                onChange: (e)=>{
                                                    const pluginKey = pluginKeys.find((p)=>p.pluginId === _types_plugin__WEBPACK_IMPORTED_MODULE_4__/* .PluginID */ .PO.GOOGLE_SEARCH);
                                                    if (pluginKey) {
                                                        const requiredKey = pluginKey.requiredKeys.find((k)=>k.key === "GOOGLE_CSE_ID");
                                                        if (requiredKey) {
                                                            const updatedPluginKey = {
                                                                ...pluginKey,
                                                                requiredKeys: pluginKey.requiredKeys.map((k)=>{
                                                                    if (k.key === "GOOGLE_CSE_ID") {
                                                                        return {
                                                                            ...k,
                                                                            value: e.target.value
                                                                        };
                                                                    }
                                                                    return k;
                                                                })
                                                            };
                                                            handlePluginKeyChange(updatedPluginKey);
                                                        }
                                                    } else {
                                                        const newPluginKey = {
                                                            pluginId: _types_plugin__WEBPACK_IMPORTED_MODULE_4__/* .PluginID */ .PO.GOOGLE_SEARCH,
                                                            requiredKeys: [
                                                                {
                                                                    key: "GOOGLE_API_KEY",
                                                                    value: ""
                                                                },
                                                                {
                                                                    key: "GOOGLE_CSE_ID",
                                                                    value: e.target.value
                                                                }
                                                            ]
                                                        };
                                                        handlePluginKeyChange(newPluginKey);
                                                    }
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "mt-6 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow hover:bg-neutral-100 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-300",
                                                onClick: ()=>{
                                                    const pluginKey = pluginKeys.find((p)=>p.pluginId === _types_plugin__WEBPACK_IMPORTED_MODULE_4__/* .PluginID */ .PO.GOOGLE_SEARCH);
                                                    if (pluginKey) {
                                                        handleClearPluginKey(pluginKey);
                                                    }
                                                },
                                                children: "Clear Google Search Plugin Keys"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        className: "mt-6 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow hover:bg-neutral-100 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-300",
                                        onClick: ()=>setIsChanging(false),
                                        children: t("Save")
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ Folder_Folder)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7403);
// EXTERNAL MODULE: external "@tabler/icons-react"
var icons_react_ = __webpack_require__(2236);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./pages/api/home/home.context.tsx
var home_context = __webpack_require__(9965);
// EXTERNAL MODULE: ./components/Buttons/SidebarActionButton/index.ts + 1 modules
var SidebarActionButton = __webpack_require__(2347);
;// CONCATENATED MODULE: ./components/Folder/Folder.tsx





const Folder = ({ currentFolder, searchTerm, handleDrop, folderComponent })=>{
    const { handleDeleteFolder, handleUpdateFolder } = (0,external_react_.useContext)(home_context["default"]);
    const [isDeleting, setIsDeleting] = (0,external_react_.useState)(false);
    const [isRenaming, setIsRenaming] = (0,external_react_.useState)(false);
    const [renameValue, setRenameValue] = (0,external_react_.useState)("");
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const handleEnterDown = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            handleRename();
        }
    };
    const handleRename = ()=>{
        handleUpdateFolder(currentFolder.id, renameValue);
        setRenameValue("");
        setIsRenaming(false);
    };
    const dropHandler = (e)=>{
        if (e.dataTransfer) {
            setIsOpen(true);
            handleDrop(e, currentFolder);
            e.target.style.background = "none";
        }
    };
    const allowDrop = (e)=>{
        e.preventDefault();
    };
    const highlightDrop = (e)=>{
        e.target.style.background = "#343541";
    };
    const removeHighlight = (e)=>{
        e.target.style.background = "none";
    };
    (0,external_react_.useEffect)(()=>{
        if (isRenaming) {
            setIsDeleting(false);
        } else if (isDeleting) {
            setIsRenaming(false);
        }
    }, [
        isRenaming,
        isDeleting
    ]);
    (0,external_react_.useEffect)(()=>{
        if (searchTerm) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [
        searchTerm
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative flex items-center",
                children: [
                    isRenaming ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex w-full items-center gap-3 bg-[#343541]/90 p-3",
                        children: [
                            isOpen ? /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconCaretDown, {
                                size: 18
                            }) : /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconCaretRight, {
                                size: 18
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                className: "mr-12 flex-1 overflow-hidden overflow-ellipsis border-neutral-400 bg-transparent text-left text-[12.5px] leading-3 text-white outline-none focus:border-neutral-100",
                                type: "text",
                                value: renameValue,
                                onChange: (e)=>setRenameValue(e.target.value),
                                onKeyDown: handleEnterDown,
                                autoFocus: true
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                        className: `flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 text-sm transition-colors duration-200 hover:bg-[#343541]/90`,
                        onClick: ()=>setIsOpen(!isOpen),
                        onDrop: (e)=>dropHandler(e),
                        onDragOver: allowDrop,
                        onDragEnter: highlightDrop,
                        onDragLeave: removeHighlight,
                        children: [
                            isOpen ? /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconCaretDown, {
                                size: 18
                            }) : /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconCaretRight, {
                                size: 18
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "relative max-h-5 flex-1 overflow-hidden text-ellipsis whitespace-nowrap break-all text-left text-[12.5px] leading-3",
                                children: currentFolder.name
                            })
                        ]
                    }),
                    (isDeleting || isRenaming) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "absolute right-1 z-10 flex text-gray-300",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(SidebarActionButton/* default */.Z, {
                                handleClick: (e)=>{
                                    e.stopPropagation();
                                    if (isDeleting) {
                                        handleDeleteFolder(currentFolder.id);
                                    } else if (isRenaming) {
                                        handleRename();
                                    }
                                    setIsDeleting(false);
                                    setIsRenaming(false);
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconCheck, {
                                    size: 18
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(SidebarActionButton/* default */.Z, {
                                handleClick: (e)=>{
                                    e.stopPropagation();
                                    setIsDeleting(false);
                                    setIsRenaming(false);
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconX, {
                                    size: 18
                                })
                            })
                        ]
                    }),
                    !isDeleting && !isRenaming && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "absolute right-1 z-10 flex text-gray-300",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(SidebarActionButton/* default */.Z, {
                                handleClick: (e)=>{
                                    e.stopPropagation();
                                    setIsRenaming(true);
                                    setRenameValue(currentFolder.name);
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconPencil, {
                                    size: 18
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(SidebarActionButton/* default */.Z, {
                                handleClick: (e)=>{
                                    e.stopPropagation();
                                    setIsDeleting(true);
                                },
                                children: /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconTrash, {
                                    size: 18
                                })
                            })
                        ]
                    })
                ]
            }),
            isOpen ? folderComponent : null
        ]
    });
};
/* harmony default export */ const Folder_Folder = (Folder);

;// CONCATENATED MODULE: ./components/Folder/index.ts



/***/ }),

/***/ 8885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ CodeBlock)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7403);
// EXTERNAL MODULE: external "@tabler/icons-react"
var icons_react_ = __webpack_require__(2236);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__(727);
// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/styles/prism"
var prism_ = __webpack_require__(4794);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./utils/app/codeblock.ts
const programmingLanguages = {
    javascript: ".js",
    python: ".py",
    java: ".java",
    c: ".c",
    cpp: ".cpp",
    "c++": ".cpp",
    "c#": ".cs",
    ruby: ".rb",
    php: ".php",
    swift: ".swift",
    "objective-c": ".m",
    kotlin: ".kt",
    typescript: ".ts",
    go: ".go",
    perl: ".pl",
    rust: ".rs",
    scala: ".scala",
    haskell: ".hs",
    lua: ".lua",
    shell: ".sh",
    sql: ".sql",
    html: ".html",
    css: ".css"
};
const generateRandomString = (length, lowercase = false)=>{
    const chars = "ABCDEFGHJKLMNPQRSTUVWXY3456789"; // excluding similar looking characters like Z, 2, I, 1, O, 0
    let result = "";
    for(let i = 0; i < length; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return lowercase ? result.toLowerCase() : result;
};

;// CONCATENATED MODULE: ./components/Markdown/CodeBlock.tsx







const CodeBlock = /*#__PURE__*/ (0,external_react_.memo)(({ language, value })=>{
    const { t } = (0,external_next_i18next_.useTranslation)("markdown");
    const [isCopied, setIsCopied] = (0,external_react_.useState)(false);
    const copyToClipboard = ()=>{
        if (!navigator.clipboard || !navigator.clipboard.writeText) {
            return;
        }
        navigator.clipboard.writeText(value).then(()=>{
            setIsCopied(true);
            setTimeout(()=>{
                setIsCopied(false);
            }, 2000);
        });
    };
    const downloadAsFile = ()=>{
        const fileExtension = programmingLanguages[language] || ".file";
        const suggestedFileName = `file-${generateRandomString(3, true)}${fileExtension}`;
        const fileName = window.prompt(t("Enter file name") || "", suggestedFileName);
        if (!fileName) {
            // user pressed cancel on prompt
            return;
        }
        const blob = new Blob([
            value
        ], {
            type: "text/plain"
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = fileName;
        link.href = url;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "codeblock relative font-sans text-[16px]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between py-1.5 px-4",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "text-xs lowercase text-white",
                        children: language
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                className: "flex gap-1.5 items-center rounded bg-none p-1 text-xs text-white",
                                onClick: copyToClipboard,
                                children: [
                                    isCopied ? /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconCheck, {
                                        size: 18
                                    }) : /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconClipboard, {
                                        size: 18
                                    }),
                                    isCopied ? t("Copied!") : t("Copy code")
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "flex items-center rounded bg-none p-1 text-xs text-white",
                                onClick: downloadAsFile,
                                children: /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconDownload, {
                                    size: 18
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_react_syntax_highlighter_.Prism, {
                language: language,
                style: prism_.oneDark,
                customStyle: {
                    margin: 0
                },
                children: value
            })
        ]
    });
});
CodeBlock.displayName = "CodeBlock";


/***/ }),

/***/ 2952:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ MemoizedReactMarkdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_1__]);
react_markdown__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const MemoizedReactMarkdown = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(react_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], (prevProps, nextProps)=>prevProps.children === nextProps.children);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);


const Navbar = ({ selectedConversation, onNewConversation })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "flex w-full justify-between bg-[#202123] py-3 px-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mr-4"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-w-[240px] overflow-hidden text-ellipsis whitespace-nowrap",
                children: selectedConversation.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconPlus, {
                className: "cursor-pointer hover:text-neutral-400 mr-8",
                onClick: onNewConversation
            })
        ]
    });
};


/***/ }),

/***/ 7297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PromptbarContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PromptbarContext);


/***/ }),

/***/ 9970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ initialState)
/* harmony export */ });
const initialState = {
    searchTerm: "",
    filteredPrompts: []
};


/***/ }),

/***/ 7304:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7987);
/* harmony import */ var _hooks_useCreateReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6094);
/* harmony import */ var _utils_app_prompts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5124);
/* harmony import */ var _types_openai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7070);
/* harmony import */ var _pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9965);
/* harmony import */ var _components_PromptFolders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8345);
/* harmony import */ var _components_Prompts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2597);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8578);
/* harmony import */ var _PromptBar_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7297);
/* harmony import */ var _Promptbar_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9970);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__, _types_openai__WEBPACK_IMPORTED_MODULE_4__, _Sidebar__WEBPACK_IMPORTED_MODULE_8__, uuid__WEBPACK_IMPORTED_MODULE_11__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_2__, _types_openai__WEBPACK_IMPORTED_MODULE_4__, _Sidebar__WEBPACK_IMPORTED_MODULE_8__, uuid__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Promptbar = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("promptbar");
    const promptBarContextValue = (0,_hooks_useCreateReducer__WEBPACK_IMPORTED_MODULE_3__/* .useCreateReducer */ .L)({
        initialState: _Promptbar_state__WEBPACK_IMPORTED_MODULE_10__/* .initialState */ .E
    });
    const { state: { prompts, defaultModelId, showPromptbar }, dispatch: homeDispatch, handleCreateFolder } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_5__["default"]);
    const { state: { searchTerm, filteredPrompts }, dispatch: promptDispatch } = promptBarContextValue;
    const handleTogglePromptbar = ()=>{
        homeDispatch({
            field: "showPromptbar",
            value: !showPromptbar
        });
        localStorage.setItem("showPromptbar", JSON.stringify(!showPromptbar));
    };
    const handleCreatePrompt = ()=>{
        if (defaultModelId) {
            const newPrompt = {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__.v4)(),
                name: `Prompt ${prompts.length + 1}`,
                description: "",
                content: "",
                model: _types_openai__WEBPACK_IMPORTED_MODULE_4__/* .OpenAIModels */ .MU[defaultModelId],
                folderId: null
            };
            const updatedPrompts = [
                ...prompts,
                newPrompt
            ];
            homeDispatch({
                field: "prompts",
                value: updatedPrompts
            });
            (0,_utils_app_prompts__WEBPACK_IMPORTED_MODULE_12__/* .savePrompts */ .V)(updatedPrompts);
        }
    };
    const handleDeletePrompt = (prompt)=>{
        const updatedPrompts = prompts.filter((p)=>p.id !== prompt.id);
        homeDispatch({
            field: "prompts",
            value: updatedPrompts
        });
        (0,_utils_app_prompts__WEBPACK_IMPORTED_MODULE_12__/* .savePrompts */ .V)(updatedPrompts);
    };
    const handleUpdatePrompt = (prompt)=>{
        const updatedPrompts = prompts.map((p)=>{
            if (p.id === prompt.id) {
                return prompt;
            }
            return p;
        });
        homeDispatch({
            field: "prompts",
            value: updatedPrompts
        });
        (0,_utils_app_prompts__WEBPACK_IMPORTED_MODULE_12__/* .savePrompts */ .V)(updatedPrompts);
    };
    const handleDrop = (e)=>{
        if (e.dataTransfer) {
            const prompt = JSON.parse(e.dataTransfer.getData("prompt"));
            const updatedPrompt = {
                ...prompt,
                folderId: e.target.dataset.folderId
            };
            handleUpdatePrompt(updatedPrompt);
            e.target.style.background = "none";
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (searchTerm) {
            promptDispatch({
                field: "filteredPrompts",
                value: prompts.filter((prompt)=>{
                    const searchable = prompt.name.toLowerCase() + " " + prompt.description.toLowerCase() + " " + prompt.content.toLowerCase();
                    return searchable.includes(searchTerm.toLowerCase());
                })
            });
        } else {
            promptDispatch({
                field: "filteredPrompts",
                value: prompts
            });
        }
    }, [
        searchTerm,
        prompts
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PromptBar_context__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z.Provider, {
        value: {
            ...promptBarContextValue,
            handleCreatePrompt,
            handleDeletePrompt,
            handleUpdatePrompt
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            side: "right",
            isOpen: showPromptbar,
            addItemButtonTitle: t("New prompt"),
            itemComponent: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Prompts__WEBPACK_IMPORTED_MODULE_7__/* .Prompts */ .j, {
                prompts: filteredPrompts.filter((prompt)=>!prompt.folderId)
            }),
            folderComponent: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PromptFolders__WEBPACK_IMPORTED_MODULE_6__/* .PromptFolders */ .K, {}),
            items: filteredPrompts,
            searchTerm: searchTerm,
            handleSearchTerm: (searchTerm)=>promptDispatch({
                    field: "searchTerm",
                    value: searchTerm
                }),
            toggleOpen: handleTogglePromptbar,
            handleCreateItem: handleCreatePrompt,
            handleCreateFolder: ()=>handleCreateFolder(t("New folder"), "prompt"),
            handleDrop: handleDrop
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promptbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ PromptComponent)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7403);
// EXTERNAL MODULE: external "@tabler/icons-react"
var icons_react_ = __webpack_require__(2236);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Buttons/SidebarActionButton/index.ts + 1 modules
var SidebarActionButton = __webpack_require__(2347);
// EXTERNAL MODULE: ./components/Promptbar/PromptBar.context.tsx
var PromptBar_context = __webpack_require__(7297);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/Promptbar/components/PromptModal.tsx



const PromptModal = ({ prompt, onClose, onUpdatePrompt })=>{
    const { t } = (0,external_next_i18next_.useTranslation)("promptbar");
    const [name, setName] = (0,external_react_.useState)(prompt.name);
    const [description, setDescription] = (0,external_react_.useState)(prompt.description);
    const [content, setContent] = (0,external_react_.useState)(prompt.content);
    const modalRef = (0,external_react_.useRef)(null);
    const nameInputRef = (0,external_react_.useRef)(null);
    const handleEnter = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            onUpdatePrompt({
                ...prompt,
                name,
                description,
                content: content.trim()
            });
            onClose();
        }
    };
    (0,external_react_.useEffect)(()=>{
        const handleMouseDown = (e)=>{
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                window.addEventListener("mouseup", handleMouseUp);
            }
        };
        const handleMouseUp = (e)=>{
            window.removeEventListener("mouseup", handleMouseUp);
            onClose();
        };
        window.addEventListener("mousedown", handleMouseDown);
        return ()=>{
            window.removeEventListener("mousedown", handleMouseDown);
        };
    }, [
        onClose
    ]);
    (0,external_react_.useEffect)(()=>{
        nameInputRef.current?.focus();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",
        onKeyDown: handleEnter,
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "fixed inset-0 z-10 overflow-hidden",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "hidden sm:inline-block sm:h-screen sm:align-middle",
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        ref: modalRef,
                        className: "dark:border-netural-400 inline-block max-h-[400px] transform overflow-y-auto rounded-lg border border-gray-300 bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-[#202123] sm:my-8 sm:max-h-[600px] sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
                        role: "dialog",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text-sm font-bold text-black dark:text-neutral-200",
                                children: t("Name")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                ref: nameInputRef,
                                className: "mt-2 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-[#40414F] dark:text-neutral-100",
                                placeholder: t("A name for your prompt.") || "",
                                value: name,
                                onChange: (e)=>setName(e.target.value)
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mt-6 text-sm font-bold text-black dark:text-neutral-200",
                                children: t("Description")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                className: "mt-2 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-[#40414F] dark:text-neutral-100",
                                style: {
                                    resize: "none"
                                },
                                placeholder: t("A description for your prompt.") || "",
                                value: description,
                                onChange: (e)=>setDescription(e.target.value),
                                rows: 3
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mt-6 text-sm font-bold text-black dark:text-neutral-200",
                                children: t("Prompt")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                className: "mt-2 w-full rounded-lg border border-neutral-500 px-4 py-2 text-neutral-900 shadow focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-[#40414F] dark:text-neutral-100",
                                style: {
                                    resize: "none"
                                },
                                placeholder: t("Prompt content. Use {{}} to denote a variable. Ex: {{name}} is a {{adjective}} {{noun}}") || "",
                                value: content,
                                onChange: (e)=>setContent(e.target.value),
                                rows: 10
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                type: "button",
                                className: "w-full px-4 py-2 mt-6 border rounded-lg shadow border-neutral-500 text-neutral-900 hover:bg-neutral-100 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-300",
                                onClick: ()=>{
                                    const updatedPrompt = {
                                        ...prompt,
                                        name,
                                        description,
                                        content: content.trim()
                                    };
                                    onUpdatePrompt(updatedPrompt);
                                    onClose();
                                },
                                children: t("Save")
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Promptbar/components/Prompt.tsx






const PromptComponent = ({ prompt })=>{
    const { dispatch: promptDispatch, handleUpdatePrompt, handleDeletePrompt } = (0,external_react_.useContext)(PromptBar_context/* default */.Z);
    const [showModal, setShowModal] = (0,external_react_.useState)(false);
    const [isDeleting, setIsDeleting] = (0,external_react_.useState)(false);
    const [isRenaming, setIsRenaming] = (0,external_react_.useState)(false);
    const [renameValue, setRenameValue] = (0,external_react_.useState)("");
    const handleUpdate = (prompt)=>{
        handleUpdatePrompt(prompt);
        promptDispatch({
            field: "searchTerm",
            value: ""
        });
    };
    const handleDelete = (e)=>{
        e.stopPropagation();
        if (isDeleting) {
            handleDeletePrompt(prompt);
            promptDispatch({
                field: "searchTerm",
                value: ""
            });
        }
        setIsDeleting(false);
    };
    const handleCancelDelete = (e)=>{
        e.stopPropagation();
        setIsDeleting(false);
    };
    const handleOpenDeleteModal = (e)=>{
        e.stopPropagation();
        setIsDeleting(true);
    };
    const handleDragStart = (e, prompt)=>{
        if (e.dataTransfer) {
            e.dataTransfer.setData("prompt", JSON.stringify(prompt));
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (isRenaming) {
            setIsDeleting(false);
        } else if (isDeleting) {
            setIsRenaming(false);
        }
    }, [
        isRenaming,
        isDeleting
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative flex items-center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                className: "flex w-full cursor-pointer items-center gap-3 rounded-lg p-3 text-sm transition-colors duration-200 hover:bg-[#343541]/90",
                draggable: "true",
                onClick: (e)=>{
                    e.stopPropagation();
                    setShowModal(true);
                },
                onDragStart: (e)=>handleDragStart(e, prompt),
                onMouseLeave: ()=>{
                    setIsDeleting(false);
                    setIsRenaming(false);
                    setRenameValue("");
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconBulbFilled, {
                        size: 18
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "relative max-h-5 flex-1 overflow-hidden text-ellipsis whitespace-nowrap break-all pr-4 text-left text-[12.5px] leading-3",
                        children: prompt.name
                    })
                ]
            }),
            (isDeleting || isRenaming) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "absolute right-1 z-10 flex text-gray-300",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(SidebarActionButton/* default */.Z, {
                        handleClick: handleDelete,
                        children: /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconCheck, {
                            size: 18
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(SidebarActionButton/* default */.Z, {
                        handleClick: handleCancelDelete,
                        children: /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconX, {
                            size: 18
                        })
                    })
                ]
            }),
            !isDeleting && !isRenaming && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute right-1 z-10 flex text-gray-300",
                children: /*#__PURE__*/ jsx_runtime.jsx(SidebarActionButton/* default */.Z, {
                    handleClick: handleOpenDeleteModal,
                    children: /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconTrash, {
                        size: 18
                    })
                })
            }),
            showModal && /*#__PURE__*/ jsx_runtime.jsx(PromptModal, {
                prompt: prompt,
                onClose: ()=>setShowModal(false),
                onUpdatePrompt: handleUpdate
            })
        ]
    });
};


/***/ }),

/***/ 8345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ PromptFolders)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9965);
/* harmony import */ var _components_Folder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2283);
/* harmony import */ var _components_Promptbar_components_Prompt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2092);
/* harmony import */ var _PromptBar_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7297);






const PromptFolders = ()=>{
    const { state: { folders } } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const { state: { searchTerm, filteredPrompts }, handleUpdatePrompt } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_PromptBar_context__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
    const handleDrop = (e, folder)=>{
        if (e.dataTransfer) {
            const prompt = JSON.parse(e.dataTransfer.getData("prompt"));
            const updatedPrompt = {
                ...prompt,
                folderId: folder.id
            };
            handleUpdatePrompt(updatedPrompt);
        }
    };
    const PromptFolders = (currentFolder)=>filteredPrompts.filter((p)=>p.folderId).map((prompt, index)=>{
            if (prompt.folderId === currentFolder.id) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "ml-5 gap-2 border-l pl-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Promptbar_components_Prompt__WEBPACK_IMPORTED_MODULE_4__/* .PromptComponent */ .j, {
                        prompt: prompt
                    })
                }, index);
            }
        });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex w-full flex-col pt-2",
        children: folders.filter((folder)=>folder.type === "prompt").sort((a, b)=>a.name.localeCompare(b.name)).map((folder, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Folder__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                searchTerm: searchTerm,
                currentFolder: folder,
                handleDrop: handleDrop,
                folderComponent: PromptFolders(folder)
            }, index))
    });
};


/***/ }),

/***/ 2597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ Prompts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2092);


const Prompts = ({ prompts })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex w-full flex-col gap-1",
        children: prompts.slice().reverse().map((prompt, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Prompt__WEBPACK_IMPORTED_MODULE_1__/* .PromptComponent */ .j, {
                prompt: prompt
            }, index))
    });
};


/***/ }),

/***/ 8321:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* reexport safe */ _Promptbar__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Promptbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7304);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Promptbar__WEBPACK_IMPORTED_MODULE_0__]);
_Promptbar__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ Search_Search)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7403);
// EXTERNAL MODULE: external "@tabler/icons-react"
var icons_react_ = __webpack_require__(2236);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./components/Search/Search.tsx



const Search = ({ placeholder, searchTerm, onSearch })=>{
    const { t } = (0,external_next_i18next_.useTranslation)("sidebar");
    const handleSearchChange = (e)=>{
        onSearch(e.target.value);
    };
    const clearSearch = ()=>{
        onSearch("");
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative flex items-center",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("input", {
                className: "w-full flex-1 rounded-md border border-neutral-600 bg-[#202123] px-4 py-3 pr-10 text-[14px] leading-3 text-white",
                type: "text",
                placeholder: t(placeholder) || "",
                value: searchTerm,
                onChange: handleSearchChange
            }),
            searchTerm && /*#__PURE__*/ jsx_runtime.jsx(icons_react_.IconX, {
                className: "absolute right-4 cursor-pointer text-neutral-300 hover:text-neutral-400",
                size: 18,
                onClick: clearSearch
            })
        ]
    });
};
/* harmony default export */ const Search_Search = (Search);

;// CONCATENATED MODULE: ./components/Search/index.ts



/***/ }),

/***/ 1831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ Import)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9884);




const Import = ({ onImport })=>{
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("sidebar");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: "import-file",
                className: "sr-only",
                tabIndex: -1,
                type: "file",
                accept: ".json",
                onChange: (e)=>{
                    if (!e.target.files?.length) return;
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = (e)=>{
                        let json = JSON.parse(e.target?.result);
                        onImport(json);
                    };
                    reader.readAsText(file);
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_3__/* .SidebarButton */ .f, {
                text: t("Import data"),
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconFileImport, {
                    size: 18
                }),
                onClick: ()=>{
                    const importFile = document.querySelector("#import-file");
                    if (importFile) {
                        importFile.click();
                    }
                }
            })
        ]
    });
};


/***/ }),

/***/ 3995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ Key)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9884);





const Key = ({ apiKey, onApiKeyChange })=>{
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("sidebar");
    const [isChanging, setIsChanging] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [newKey, setNewKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(apiKey);
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const handleEnterDown = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            handleUpdateKey(newKey);
        }
    };
    const handleUpdateKey = (newKey)=>{
        onApiKeyChange(newKey.trim());
        setIsChanging(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (isChanging) {
            inputRef.current?.focus();
        }
    }, [
        isChanging
    ]);
    return isChanging ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "duration:200 flex w-full cursor-pointer items-center rounded-md py-3 px-3 transition-colors hover:bg-gray-500/10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconKey, {
                size: 18
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ref: inputRef,
                className: "ml-2 h-[20px] flex-1 overflow-hidden overflow-ellipsis border-b border-neutral-400 bg-transparent pr-1 text-[12.5px] leading-3 text-left text-white outline-none focus:border-neutral-100",
                type: "password",
                value: newKey,
                onChange: (e)=>setNewKey(e.target.value),
                onKeyDown: handleEnterDown,
                placeholder: t("API Key") || "API Key"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-[40px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconCheck, {
                        className: "ml-auto min-w-[20px] text-neutral-400 hover:text-neutral-100",
                        size: 18,
                        onClick: (e)=>{
                            e.stopPropagation();
                            handleUpdateKey(newKey);
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconX, {
                        className: "ml-auto min-w-[20px] text-neutral-400 hover:text-neutral-100",
                        size: 18,
                        onClick: (e)=>{
                            e.stopPropagation();
                            setIsChanging(false);
                            setNewKey(apiKey);
                        }
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Sidebar_SidebarButton__WEBPACK_IMPORTED_MODULE_4__/* .SidebarButton */ .f, {
        text: t("OpenAI API Key"),
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconKey, {
            size: 18
        }),
        onClick: ()=>setIsChanging(true)
    });
};


/***/ }),

/***/ 3240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ SettingDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useCreateReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6094);
/* harmony import */ var _utils_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5311);
/* harmony import */ var _pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9965);






const SettingDialog = ({ open, onClose })=>{
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("settings");
    const settings = (0,_utils_app_settings__WEBPACK_IMPORTED_MODULE_5__/* .getSettings */ .G)();
    const { state, dispatch } = (0,_hooks_useCreateReducer__WEBPACK_IMPORTED_MODULE_3__/* .useCreateReducer */ .L)({
        initialState: settings
    });
    const { dispatch: homeDispatch } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_4__["default"]);
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleMouseDown = (e)=>{
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                window.addEventListener("mouseup", handleMouseUp);
            }
        };
        const handleMouseUp = (e)=>{
            window.removeEventListener("mouseup", handleMouseUp);
            onClose();
        };
        window.addEventListener("mousedown", handleMouseDown);
        return ()=>{
            window.removeEventListener("mousedown", handleMouseDown);
        };
    }, [
        onClose
    ]);
    const handleSave = ()=>{
        homeDispatch({
            field: "lightMode",
            value: state.theme
        });
        (0,_utils_app_settings__WEBPACK_IMPORTED_MODULE_5__/* .saveSettings */ .z)(state);
    };
    // Render nothing if the dialog is not open.
    if (!open) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    }
    // Render the dialog.
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "fixed inset-0 z-10 overflow-hidden",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden sm:inline-block sm:h-screen sm:align-middle",
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        ref: modalRef,
                        className: "dark:border-netural-400 inline-block max-h-[400px] transform overflow-y-auto rounded-lg border border-gray-300 bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-[#202123] sm:my-8 sm:max-h-[600px] sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
                        role: "dialog",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-lg pb-4 font-bold text-black dark:text-neutral-200",
                                children: t("Settings")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-sm font-bold mb-2 text-black dark:text-neutral-200",
                                children: t("Theme")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                className: "w-full cursor-pointer bg-transparent p-2 text-neutral-700 dark:text-neutral-200",
                                value: state.theme,
                                onChange: (event)=>dispatch({
                                        field: "theme",
                                        value: event.target.value
                                    }),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "dark",
                                        children: t("Dark mode")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "light",
                                        children: t("Light mode")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "w-full px-4 py-2 mt-6 border rounded-lg shadow border-neutral-500 text-neutral-900 hover:bg-neutral-100 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-300",
                                onClick: ()=>{
                                    handleSave();
                                    onClose();
                                },
                                children: t("Save")
                            })
                        ]
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 6474:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7987);
/* harmony import */ var _components_OpenCloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7288);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(313);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__]);
react_i18next__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Sidebar = ({ isOpen, addItemButtonTitle, side, items, itemComponent, folderComponent, footerComponent, searchTerm, handleSearchTerm, toggleOpen, handleCreateItem, handleCreateFolder, handleDrop })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("promptbar");
    const allowDrop = (e)=>{
        e.preventDefault();
    };
    const highlightDrop = (e)=>{
        e.target.style.background = "#343541";
    };
    const removeHighlight = (e)=>{
        e.target.style.background = "none";
    };
    return isOpen ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `fixed top-0 ${side}-0 z-40 flex h-full w-[260px] flex-none flex-col space-y-2 bg-[#202123] p-2 text-[14px] transition-all sm:relative sm:top-0`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "text-sidebar flex w-[190px] flex-shrink-0 cursor-pointer select-none items-center gap-3 rounded-md border border-white/20 p-3 text-white transition-colors duration-200 hover:bg-gray-500/10",
                                onClick: ()=>{
                                    handleCreateItem();
                                    handleSearchTerm("");
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconPlus, {
                                        size: 16
                                    }),
                                    addItemButtonTitle
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "ml-2 flex flex-shrink-0 cursor-pointer items-center gap-3 rounded-md border border-white/20 p-3 text-sm text-white transition-colors duration-200 hover:bg-gray-500/10",
                                onClick: handleCreateFolder,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconFolderPlus, {
                                    size: 16
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Search__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        placeholder: t("Search...") || "",
                        searchTerm: searchTerm,
                        onSearch: handleSearchTerm
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-grow overflow-auto",
                        children: [
                            items?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex border-b border-white/20 pb-2",
                                children: folderComponent
                            }),
                            items?.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "pt-2",
                                onDrop: handleDrop,
                                onDragOver: allowDrop,
                                onDragEnter: highlightDrop,
                                onDragLeave: removeHighlight,
                                children: itemComponent
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-8 select-none text-center text-white opacity-50",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconMistOff, {
                                        className: "mx-auto mb-3"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-[14px] leading-normal",
                                        children: t("No data.")
                                    })
                                ]
                            })
                        ]
                    }),
                    footerComponent
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OpenCloseButton__WEBPACK_IMPORTED_MODULE_3__/* .CloseSidebarButton */ .l, {
                onClick: toggleOpen,
                side: side
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OpenCloseButton__WEBPACK_IMPORTED_MODULE_3__/* .OpenSidebarButton */ .G, {
        onClick: toggleOpen,
        side: side
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ SidebarButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);

const SidebarButton = ({ text, icon, onClick })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "flex w-full cursor-pointer select-none items-center gap-3 rounded-md py-3 px-3 text-[14px] leading-3 text-white transition-colors duration-200 hover:bg-gray-500/10",
        onClick: onClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: icon
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: text
            })
        ]
    });
};


/***/ }),

/***/ 7288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ OpenSidebarButton),
/* harmony export */   l: () => (/* binding */ CloseSidebarButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__);


const CloseSidebarButton = ({ onClick, side })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: `fixed top-5 ${side === "right" ? "right-[270px]" : "left-[270px]"} z-50 h-7 w-7 hover:text-gray-400 dark:text-white dark:hover:text-gray-300 sm:top-0.5 sm:${side === "right" ? "right-[270px]" : "left-[270px]"} sm:h-8 sm:w-8 sm:text-neutral-700`,
                onClick: onClick,
                children: side === "right" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconArrowBarRight, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconArrowBarLeft, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: onClick,
                className: "absolute top-0 left-0 z-10 h-full w-full bg-black opacity-70 sm:hidden"
            })
        ]
    });
};
const OpenSidebarButton = ({ onClick, side })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `fixed top-2.5 ${side === "right" ? "right-2" : "left-2"} z-50 h-7 w-7 text-white hover:text-gray-400 dark:text-white dark:hover:text-gray-300 sm:top-0.5 sm:${side === "right" ? "right-2" : "left-2"} sm:h-8 sm:w-8 sm:text-neutral-700`,
        onClick: onClick,
        children: side === "right" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconArrowBarLeft, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__.IconArrowBarRight, {})
    });
};


/***/ }),

/***/ 8578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* reexport safe */ _Sidebar__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6474);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Sidebar__WEBPACK_IMPORTED_MODULE_0__]);
_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ Spinner_Spinner)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7403);
;// CONCATENATED MODULE: ./components/Spinner/Spinner.tsx

const Spinner = ({ size = "1em", className = "" })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        stroke: "currentColor",
        fill: "none",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: `animate-spin ${className}`,
        height: size,
        width: size,
        xmlns: "https://www.w3.org/TR/REC-xml/",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("line", {
                x1: "12",
                y1: "2",
                x2: "12",
                y2: "6"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("line", {
                x1: "12",
                y1: "18",
                x2: "12",
                y2: "22"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("line", {
                x1: "4.93",
                y1: "4.93",
                x2: "7.76",
                y2: "7.76"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("line", {
                x1: "16.24",
                y1: "16.24",
                x2: "19.07",
                y2: "19.07"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("line", {
                x1: "2",
                y1: "12",
                x2: "6",
                y2: "12"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("line", {
                x1: "18",
                y1: "12",
                x2: "22",
                y2: "12"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("line", {
                x1: "4.93",
                y1: "19.07",
                x2: "7.76",
                y2: "16.24"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("line", {
                x1: "16.24",
                y1: "7.76",
                x2: "19.07",
                y2: "4.93"
            })
        ]
    });
};
/* harmony default export */ const Spinner_Spinner = (Spinner);

;// CONCATENATED MODULE: ./components/Spinner/index.ts



/***/ }),

/***/ 6094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ useCreateReducer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Returns a typed dispatch and state
const useCreateReducer = ({ initialState })=>{
    const reducer = (state, action)=>{
        if (!action.type) return {
            ...state,
            [action.field]: action.value
        };
        if (action.type === "reset") return initialState;
        throw new Error();
    };
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, initialState);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            state,
            dispatch
        }), [
        state,
        dispatch
    ]);
};


/***/ }),

/***/ 9965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const HomeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeContext);


/***/ }),

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState)
/* harmony export */ });
const initialState = {
    apiKey: "",
    loading: false,
    pluginKeys: [],
    lightMode: "dark",
    messageIsStreaming: false,
    modelError: null,
    models: [],
    folders: [],
    conversations: [],
    selectedConversation: undefined,
    currentMessage: undefined,
    prompts: [],
    temperature: 1,
    showPromptbar: true,
    showChatbar: true,
    currentFolder: undefined,
    messageError: false,
    searchTerm: "",
    defaultModelId: undefined,
    serverSideApiKeyIsSet: false,
    serverSidePluginKeysSet: false
};


/***/ }),

/***/ 881:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useCreateReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6094);
/* harmony import */ var _services_errorService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8051);
/* harmony import */ var _services_useApiService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4876);
/* harmony import */ var _utils_app_clean__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4927);
/* harmony import */ var _utils_app_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8219);
/* harmony import */ var _utils_app_conversation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6236);
/* harmony import */ var _utils_app_folders__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2815);
/* harmony import */ var _utils_app_prompts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5124);
/* harmony import */ var _utils_app_settings__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5311);
/* harmony import */ var _types_openai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7070);
/* harmony import */ var _components_Chat_Chat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1086);
/* harmony import */ var _components_Chatbar_Chatbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8151);
/* harmony import */ var _components_Mobile_Navbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8910);
/* harmony import */ var _components_Promptbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8321);
/* harmony import */ var _home_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9965);
/* harmony import */ var _home_state__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(138);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_app_clean__WEBPACK_IMPORTED_MODULE_9__, _types_openai__WEBPACK_IMPORTED_MODULE_11__, _components_Chat_Chat__WEBPACK_IMPORTED_MODULE_12__, _components_Chatbar_Chatbar__WEBPACK_IMPORTED_MODULE_13__, _components_Promptbar__WEBPACK_IMPORTED_MODULE_15__, uuid__WEBPACK_IMPORTED_MODULE_18__]);
([_utils_app_clean__WEBPACK_IMPORTED_MODULE_9__, _types_openai__WEBPACK_IMPORTED_MODULE_11__, _components_Chat_Chat__WEBPACK_IMPORTED_MODULE_12__, _components_Chatbar_Chatbar__WEBPACK_IMPORTED_MODULE_13__, _components_Promptbar__WEBPACK_IMPORTED_MODULE_15__, uuid__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);























const Home = ({ serverSideApiKeyIsSet, serverSidePluginKeysSet, defaultModelId })=>{
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("chat");
    const { getModels } = (0,_services_useApiService__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const { getModelsError } = (0,_services_errorService__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const [initialRender, setInitialRender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const contextValue = (0,_hooks_useCreateReducer__WEBPACK_IMPORTED_MODULE_6__/* .useCreateReducer */ .L)({
        initialState: _home_state__WEBPACK_IMPORTED_MODULE_17__.initialState
    });
    const { state: { apiKey, lightMode, folders, conversations, selectedConversation, prompts, temperature }, dispatch } = contextValue;
    const stopConversationRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const { data, error, refetch } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "GetModels",
        apiKey,
        serverSideApiKeyIsSet
    ], ({ signal })=>{
        if (!apiKey && !serverSideApiKeyIsSet) return null;
        return getModels({
            key: apiKey
        }, signal);
    }, {
        enabled: true,
        refetchOnMount: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (data) dispatch({
            field: "models",
            value: data
        });
    }, [
        data,
        dispatch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch({
            field: "modelError",
            value: getModelsError(error)
        });
    }, [
        dispatch,
        error,
        getModelsError
    ]);
    // FETCH MODELS ----------------------------------------------
    const handleSelectConversation = (conversation)=>{
        dispatch({
            field: "selectedConversation",
            value: conversation
        });
        (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_19__/* .saveConversation */ .m7)(conversation);
    };
    // FOLDER OPERATIONS  --------------------------------------------
    const handleCreateFolder = (name, type)=>{
        const newFolder = {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_18__.v4)(),
            name,
            type
        };
        const updatedFolders = [
            ...folders,
            newFolder
        ];
        dispatch({
            field: "folders",
            value: updatedFolders
        });
        (0,_utils_app_folders__WEBPACK_IMPORTED_MODULE_20__/* .saveFolders */ ._)(updatedFolders);
    };
    const handleDeleteFolder = (folderId)=>{
        const updatedFolders = folders.filter((f)=>f.id !== folderId);
        dispatch({
            field: "folders",
            value: updatedFolders
        });
        (0,_utils_app_folders__WEBPACK_IMPORTED_MODULE_20__/* .saveFolders */ ._)(updatedFolders);
        const updatedConversations = conversations.map((c)=>{
            if (c.folderId === folderId) {
                return {
                    ...c,
                    folderId: null
                };
            }
            return c;
        });
        dispatch({
            field: "conversations",
            value: updatedConversations
        });
        (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_19__/* .saveConversations */ .fB)(updatedConversations);
        const updatedPrompts = prompts.map((p)=>{
            if (p.folderId === folderId) {
                return {
                    ...p,
                    folderId: null
                };
            }
            return p;
        });
        dispatch({
            field: "prompts",
            value: updatedPrompts
        });
        (0,_utils_app_prompts__WEBPACK_IMPORTED_MODULE_21__/* .savePrompts */ .V)(updatedPrompts);
    };
    const handleUpdateFolder = (folderId, name)=>{
        const updatedFolders = folders.map((f)=>{
            if (f.id === folderId) {
                return {
                    ...f,
                    name
                };
            }
            return f;
        });
        dispatch({
            field: "folders",
            value: updatedFolders
        });
        (0,_utils_app_folders__WEBPACK_IMPORTED_MODULE_20__/* .saveFolders */ ._)(updatedFolders);
    };
    // CONVERSATION OPERATIONS  --------------------------------------------
    const handleNewConversation = ()=>{
        const lastConversation = conversations[conversations.length - 1];
        const newConversation = {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_18__.v4)(),
            name: t("New Conversation"),
            messages: [],
            model: lastConversation?.model || {
                id: _types_openai__WEBPACK_IMPORTED_MODULE_11__/* .OpenAIModels */ .MU[defaultModelId].id,
                name: _types_openai__WEBPACK_IMPORTED_MODULE_11__/* .OpenAIModels */ .MU[defaultModelId].name,
                maxLength: _types_openai__WEBPACK_IMPORTED_MODULE_11__/* .OpenAIModels */ .MU[defaultModelId].maxLength,
                tokenLimit: _types_openai__WEBPACK_IMPORTED_MODULE_11__/* .OpenAIModels */ .MU[defaultModelId].tokenLimit
            },
            prompt: _utils_app_const__WEBPACK_IMPORTED_MODULE_10__/* .DEFAULT_SYSTEM_PROMPT */ .cl,
            temperature: lastConversation?.temperature ?? _utils_app_const__WEBPACK_IMPORTED_MODULE_10__/* .DEFAULT_TEMPERATURE */ .Ar,
            folderId: null
        };
        const updatedConversations = [
            ...conversations,
            newConversation
        ];
        dispatch({
            field: "selectedConversation",
            value: newConversation
        });
        dispatch({
            field: "conversations",
            value: updatedConversations
        });
        (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_19__/* .saveConversation */ .m7)(newConversation);
        (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_19__/* .saveConversations */ .fB)(updatedConversations);
        dispatch({
            field: "loading",
            value: false
        });
    };
    const handleUpdateConversation = (conversation, data)=>{
        const updatedConversation = {
            ...conversation,
            [data.key]: data.value
        };
        const { single, all } = (0,_utils_app_conversation__WEBPACK_IMPORTED_MODULE_19__/* .updateConversation */ .X1)(updatedConversation, conversations);
        dispatch({
            field: "selectedConversation",
            value: single
        });
        dispatch({
            field: "conversations",
            value: all
        });
    };
    // EFFECTS  --------------------------------------------
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (window.innerWidth < 640) {
            dispatch({
                field: "showChatbar",
                value: false
            });
        }
    }, [
        selectedConversation
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        defaultModelId && dispatch({
            field: "defaultModelId",
            value: defaultModelId
        });
        serverSideApiKeyIsSet && dispatch({
            field: "serverSideApiKeyIsSet",
            value: serverSideApiKeyIsSet
        });
        serverSidePluginKeysSet && dispatch({
            field: "serverSidePluginKeysSet",
            value: serverSidePluginKeysSet
        });
    }, [
        defaultModelId,
        serverSideApiKeyIsSet,
        serverSidePluginKeysSet
    ]);
    // ON LOAD --------------------------------------------
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const settings = (0,_utils_app_settings__WEBPACK_IMPORTED_MODULE_22__/* .getSettings */ .G)();
        if (settings.theme) {
            dispatch({
                field: "lightMode",
                value: settings.theme
            });
        }
        const apiKey = localStorage.getItem("apiKey");
        if (serverSideApiKeyIsSet) {
            dispatch({
                field: "apiKey",
                value: ""
            });
            localStorage.removeItem("apiKey");
        } else if (apiKey) {
            dispatch({
                field: "apiKey",
                value: apiKey
            });
        }
        const pluginKeys = localStorage.getItem("pluginKeys");
        if (serverSidePluginKeysSet) {
            dispatch({
                field: "pluginKeys",
                value: []
            });
            localStorage.removeItem("pluginKeys");
        } else if (pluginKeys) {
            dispatch({
                field: "pluginKeys",
                value: pluginKeys
            });
        }
        if (window.innerWidth < 640) {
            dispatch({
                field: "showChatbar",
                value: false
            });
            dispatch({
                field: "showPromptbar",
                value: false
            });
        }
        const showChatbar = localStorage.getItem("showChatbar");
        if (showChatbar) {
            dispatch({
                field: "showChatbar",
                value: showChatbar === "true"
            });
        }
        const showPromptbar = localStorage.getItem("showPromptbar");
        if (showPromptbar) {
            dispatch({
                field: "showPromptbar",
                value: showPromptbar === "true"
            });
        }
        const folders = localStorage.getItem("folders");
        if (folders) {
            dispatch({
                field: "folders",
                value: JSON.parse(folders)
            });
        }
        const prompts = localStorage.getItem("prompts");
        if (prompts) {
            dispatch({
                field: "prompts",
                value: JSON.parse(prompts)
            });
        }
        const conversationHistory = localStorage.getItem("conversationHistory");
        if (conversationHistory) {
            const parsedConversationHistory = JSON.parse(conversationHistory);
            const cleanedConversationHistory = (0,_utils_app_clean__WEBPACK_IMPORTED_MODULE_9__/* .cleanConversationHistory */ .m)(parsedConversationHistory);
            dispatch({
                field: "conversations",
                value: cleanedConversationHistory
            });
        }
        const selectedConversation = localStorage.getItem("selectedConversation");
        if (selectedConversation) {
            const parsedSelectedConversation = JSON.parse(selectedConversation);
            const cleanedSelectedConversation = (0,_utils_app_clean__WEBPACK_IMPORTED_MODULE_9__/* .cleanSelectedConversation */ .$)(parsedSelectedConversation);
            dispatch({
                field: "selectedConversation",
                value: cleanedSelectedConversation
            });
        } else {
            const lastConversation = conversations[conversations.length - 1];
            dispatch({
                field: "selectedConversation",
                value: {
                    id: (0,uuid__WEBPACK_IMPORTED_MODULE_18__.v4)(),
                    name: t("New Conversation"),
                    messages: [],
                    model: _types_openai__WEBPACK_IMPORTED_MODULE_11__/* .OpenAIModels */ .MU[defaultModelId],
                    prompt: _utils_app_const__WEBPACK_IMPORTED_MODULE_10__/* .DEFAULT_SYSTEM_PROMPT */ .cl,
                    temperature: lastConversation?.temperature ?? _utils_app_const__WEBPACK_IMPORTED_MODULE_10__/* .DEFAULT_TEMPERATURE */ .Ar,
                    folderId: null
                }
            });
        }
    }, [
        defaultModelId,
        dispatch,
        serverSideApiKeyIsSet,
        serverSidePluginKeysSet
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_home_context__WEBPACK_IMPORTED_MODULE_16__["default"].Provider, {
        value: {
            ...contextValue,
            handleNewConversation,
            handleCreateFolder,
            handleDeleteFolder,
            handleUpdateFolder,
            handleSelectConversation,
            handleUpdateConversation
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Rulz-AI"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Rulz-AI is a Superintelligence Artificail conversational model version."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "height=device-height ,width=device-width, initial-scale=1, user-scalable=no"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/IconRobot.ico"
                    })
                ]
            }),
            selectedConversation && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: `flex h-screen w-screen flex-col text-sm text-white dark:text-white ${lightMode}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed top-0 w-full sm:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Mobile_Navbar__WEBPACK_IMPORTED_MODULE_14__/* .Navbar */ .w, {
                            selectedConversation: selectedConversation,
                            onNewConversation: handleNewConversation
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex h-full w-full pt-[48px] sm:pt-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Chatbar_Chatbar__WEBPACK_IMPORTED_MODULE_13__/* .Chatbar */ .W, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Chat_Chat__WEBPACK_IMPORTED_MODULE_12__/* .Chat */ .e, {
                                    stopConversationRef: stopConversationRef
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Promptbar__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getServerSideProps = async ({ locale })=>{
    const defaultModelId = process.env.DEFAULT_MODEL && Object.values(_types_openai__WEBPACK_IMPORTED_MODULE_11__/* .OpenAIModelID */ .bm).includes(process.env.DEFAULT_MODEL) && process.env.DEFAULT_MODEL || _types_openai__WEBPACK_IMPORTED_MODULE_11__/* .fallbackModelID */ .tJ;
    let serverSidePluginKeysSet = false;
    const googleApiKey = process.env.GOOGLE_API_KEY;
    const googleCSEId = process.env.GOOGLE_CSE_ID;
    if (googleApiKey && googleCSEId) {
        serverSidePluginKeysSet = true;
    }
    return {
        props: {
            serverSideApiKeyIsSet: !!process.env.OPENAI_API_KEY,
            defaultModelId,
            serverSidePluginKeysSet,
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__.serverSideTranslations)(locale ?? "en", [
                "common",
                "chat",
                "sidebar",
                "markdown",
                "promptbar",
                "settings"
            ])
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);


const useErrorService = ()=>{
    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)("chat");
    return {
        getModelsError: (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(error)=>{
                return !error ? null : {
                    title: t("Error fetching models."),
                    code: error.status || "unknown",
                    messageLines: error.statusText ? [
                        error.statusText
                    ] : [
                        t("Make sure your OpenAI API key is set in the bottom left of the sidebar."),
                        t("If you completed this step, OpenAI may be experiencing issues.")
                    ]
                };
            }, [
            t
        ])
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useErrorService);


/***/ }),

/***/ 4876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ services_useApiService)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./hooks/useFetch.ts
const useFetch = ()=>{
    const handleFetch = async (url, request, signal)=>{
        const requestUrl = request?.params ? `${url}${request.params}` : url;
        const requestBody = request?.body ? request.body instanceof FormData ? {
            ...request,
            body: request.body
        } : {
            ...request,
            body: JSON.stringify(request.body)
        } : request;
        const headers = {
            ...request?.headers ? request.headers : request?.body && request.body instanceof FormData ? {} : {
                "Content-type": "application/json"
            }
        };
        return fetch(requestUrl, {
            ...requestBody,
            headers,
            signal
        }).then((response)=>{
            if (!response.ok) throw response;
            const contentType = response.headers.get("content-type");
            const contentDisposition = response.headers.get("content-disposition");
            const headers = response.headers;
            const result = contentType && (contentType?.indexOf("application/json") !== -1 || contentType?.indexOf("text/plain") !== -1) ? response.json() : contentDisposition?.indexOf("attachment") !== -1 ? response.blob() : response;
            return result;
        }).catch(async (err)=>{
            const contentType = err.headers.get("content-type");
            const errResult = contentType && contentType?.indexOf("application/problem+json") !== -1 ? await err.json() : err;
            throw errResult;
        });
    };
    return {
        get: async (url, request)=>{
            return handleFetch(url, {
                ...request,
                method: "get"
            });
        },
        post: async (url, request)=>{
            return handleFetch(url, {
                ...request,
                method: "post"
            });
        },
        put: async (url, request)=>{
            return handleFetch(url, {
                ...request,
                method: "put"
            });
        },
        patch: async (url, request)=>{
            return handleFetch(url, {
                ...request,
                method: "patch"
            });
        },
        delete: async (url, request)=>{
            return handleFetch(url, {
                ...request,
                method: "delete"
            });
        }
    };
};

;// CONCATENATED MODULE: ./services/useApiService.ts


const useApiService = ()=>{
    const fetchService = useFetch();
    // const getModels = useCallback(
    // 	(
    // 		params: GetManagementRoutineInstanceDetailedParams,
    // 		signal?: AbortSignal
    // 	) => {
    // 		return fetchService.get<GetManagementRoutineInstanceDetailed>(
    // 			`/v1/ManagementRoutines/${params.managementRoutineId}/instances/${params.instanceId
    // 			}?sensorGroupIds=${params.sensorGroupId ?? ''}`,
    // 			{
    // 				signal,
    // 			}
    // 		);
    // 	},
    // 	[fetchService]
    // );
    const getModels = (0,external_react_.useCallback)((params, signal)=>{
        return fetchService.post(`/api/models`, {
            body: {
                key: params.key
            },
            headers: {
                "Content-Type": "application/json"
            },
            signal
        });
    }, [
        fetchService
    ]);
    return {
        getModels
    };
};
/* harmony default export */ const services_useApiService = (useApiService);


/***/ }),

/***/ 7070:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MU: () => (/* binding */ OpenAIModels),
/* harmony export */   bm: () => (/* binding */ OpenAIModelID),
/* harmony export */   tJ: () => (/* binding */ fallbackModelID)
/* harmony export */ });
/* unused harmony export OpenAIModelSchema */
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const OpenAIModelSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({
    id: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
    azureDeploymentId: zod__WEBPACK_IMPORTED_MODULE_0__.string().optional(),
    name: zod__WEBPACK_IMPORTED_MODULE_0__.string(),
    maxLength: zod__WEBPACK_IMPORTED_MODULE_0__.number(),
    tokenLimit: zod__WEBPACK_IMPORTED_MODULE_0__.number()
});
var OpenAIModelID;
(function(OpenAIModelID) {
    OpenAIModelID["GPT_3_5"] = "gpt-3.5-turbo";
    OpenAIModelID["GPT_3_5_16K"] = "gpt-3.5-turbo-16k";
    OpenAIModelID["GPT_3_5_AZ"] = "gpt-35-turbo";
    OpenAIModelID["GPT_3_5_16K_AZ"] = "gpt-35-turbo-16k";
    OpenAIModelID["GPT_4"] = "gpt-4";
    OpenAIModelID["GPT_4_32K"] = "gpt-4-32k";
})(OpenAIModelID || (OpenAIModelID = {}));
// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
const fallbackModelID = OpenAIModelID.GPT_3_5;
const OpenAIModels = {
    [OpenAIModelID.GPT_3_5]: {
        id: OpenAIModelID.GPT_3_5,
        name: "GPT-3.5",
        maxLength: 12000,
        tokenLimit: 4000
    },
    [OpenAIModelID.GPT_3_5_16K]: {
        id: OpenAIModelID.GPT_3_5_16K,
        name: "GPT-3.5-16K",
        maxLength: 48000,
        tokenLimit: 16000
    },
    [OpenAIModelID.GPT_3_5_AZ]: {
        id: OpenAIModelID.GPT_3_5_AZ,
        name: "GPT-3.5",
        maxLength: 12000,
        tokenLimit: 4000
    },
    [OpenAIModelID.GPT_3_5_16K_AZ]: {
        id: OpenAIModelID.GPT_3_5_16K_AZ,
        name: "GPT-3.5-16K",
        maxLength: 48000,
        tokenLimit: 16000
    },
    [OpenAIModelID.GPT_4]: {
        id: OpenAIModelID.GPT_4,
        name: "GPT-4",
        maxLength: 24000,
        tokenLimit: 8000
    },
    [OpenAIModelID.GPT_4_32K]: {
        id: OpenAIModelID.GPT_4_32K,
        name: "GPT-4-32K",
        maxLength: 96000,
        tokenLimit: 32000
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PO: () => (/* binding */ PluginID),
/* harmony export */   xN: () => (/* binding */ PluginList)
/* harmony export */ });
/* unused harmony exports PluginName, Plugins */
var PluginID;
(function(PluginID) {
    PluginID["GOOGLE_SEARCH"] = "google-search";
})(PluginID || (PluginID = {}));
var PluginName;
(function(PluginName) {
    PluginName["GOOGLE_SEARCH"] = "Google Search";
})(PluginName || (PluginName = {}));
const Plugins = {
    [PluginID.GOOGLE_SEARCH]: {
        id: PluginID.GOOGLE_SEARCH,
        name: PluginName.GOOGLE_SEARCH,
        requiredKeys: [
            {
                key: "GOOGLE_API_KEY",
                value: ""
            },
            {
                key: "GOOGLE_CSE_ID",
                value: ""
            }
        ]
    }
};
const PluginList = Object.values(Plugins);


/***/ }),

/***/ 6485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ getEndpoint)
/* harmony export */ });
/* harmony import */ var _types_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4597);

const getEndpoint = (plugin)=>{
    if (!plugin) {
        return "api/chat";
    }
    if (plugin.id === _types_plugin__WEBPACK_IMPORTED_MODULE_0__/* .PluginID */ .PO.GOOGLE_SEARCH) {
        return "api/google";
    }
    return "api/chat";
};


/***/ }),

/***/ 4927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ cleanSelectedConversation),
/* harmony export */   m: () => (/* binding */ cleanConversationHistory)
/* harmony export */ });
/* harmony import */ var _types_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7070);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8219);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_types_openai__WEBPACK_IMPORTED_MODULE_0__]);
_types_openai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const cleanSelectedConversation = (conversation)=>{
    // added model for each conversation (3/20/23)
    // added system prompt for each conversation (3/21/23)
    // added folders (3/23/23)
    // added prompts (3/26/23)
    // added messages (4/16/23)
    let updatedConversation = conversation;
    // check for model on each conversation
    if (!updatedConversation.model) {
        updatedConversation = {
            ...updatedConversation,
            model: updatedConversation.model || _types_openai__WEBPACK_IMPORTED_MODULE_0__/* .OpenAIModels */ .MU[_types_openai__WEBPACK_IMPORTED_MODULE_0__/* .OpenAIModelID */ .bm.GPT_3_5]
        };
    }
    // check for system prompt on each conversation
    if (!updatedConversation.prompt) {
        updatedConversation = {
            ...updatedConversation,
            prompt: updatedConversation.prompt || _const__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_SYSTEM_PROMPT */ .cl
        };
    }
    if (!updatedConversation.temperature) {
        updatedConversation = {
            ...updatedConversation,
            temperature: updatedConversation.temperature || _const__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_TEMPERATURE */ .Ar
        };
    }
    if (!updatedConversation.folderId) {
        updatedConversation = {
            ...updatedConversation,
            folderId: updatedConversation.folderId || null
        };
    }
    if (!updatedConversation.messages) {
        updatedConversation = {
            ...updatedConversation,
            messages: updatedConversation.messages || []
        };
    }
    return updatedConversation;
};
const cleanConversationHistory = (history)=>{
    // added model for each conversation (3/20/23)
    // added system prompt for each conversation (3/21/23)
    // added folders (3/23/23)
    // added prompts (3/26/23)
    // added messages (4/16/23)
    if (!Array.isArray(history)) {
        console.warn("history is not an array. Returning an empty array.");
        return [];
    }
    return history.reduce((acc, conversation)=>{
        try {
            if (!conversation.model) {
                conversation.model = _types_openai__WEBPACK_IMPORTED_MODULE_0__/* .OpenAIModels */ .MU[_types_openai__WEBPACK_IMPORTED_MODULE_0__/* .OpenAIModelID */ .bm.GPT_4];
            }
            if (!conversation.prompt) {
                conversation.prompt = _const__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_SYSTEM_PROMPT */ .cl;
            }
            if (!conversation.temperature) {
                conversation.temperature = _const__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_TEMPERATURE */ .Ar;
            }
            if (!conversation.folderId) {
                conversation.folderId = null;
            }
            if (!conversation.messages) {
                conversation.messages = [];
            }
            acc.push(conversation);
            return acc;
        } catch (error) {
            console.warn(`error while cleaning conversations' history. Removing culprit`, error);
        }
        return acc;
    }, []);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ar: () => (/* binding */ DEFAULT_TEMPERATURE),
/* harmony export */   bg: () => (/* binding */ OPENAI_API_HOST),
/* harmony export */   cl: () => (/* binding */ DEFAULT_SYSTEM_PROMPT)
/* harmony export */ });
/* unused harmony exports OPENAI_API_TYPE, OPENAI_API_VERSION, OPENAI_ORGANIZATION, AZURE_DEPLOYMENT_ID */
const DEFAULT_SYSTEM_PROMPT = process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT || "Rulz-AI is a Powerful Language Model trained on massive data. Respond using markdown and emoji.";
const OPENAI_API_HOST = process.env.OPENAI_API_HOST || "https://api.openai.com";
const DEFAULT_TEMPERATURE = parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "0.5");
const OPENAI_API_TYPE = process.env.OPENAI_API_TYPE || "openai";
const OPENAI_API_VERSION = process.env.OPENAI_API_VERSION || "2023-06-01-preview";
const OPENAI_ORGANIZATION = process.env.OPENAI_ORGANIZATION || "";
const AZURE_DEPLOYMENT_ID = process.env.AZURE_DEPLOYMENT_ID || "";


/***/ }),

/***/ 6236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X1: () => (/* binding */ updateConversation),
/* harmony export */   fB: () => (/* binding */ saveConversations),
/* harmony export */   m7: () => (/* binding */ saveConversation)
/* harmony export */ });
const updateConversation = (updatedConversation, allConversations)=>{
    const updatedConversations = allConversations.map((c)=>{
        if (c.id === updatedConversation.id) {
            return updatedConversation;
        }
        return c;
    });
    saveConversation(updatedConversation);
    saveConversations(updatedConversations);
    return {
        single: updatedConversation,
        all: updatedConversations
    };
};
const saveConversation = (conversation)=>{
    localStorage.setItem("selectedConversation", JSON.stringify(conversation));
};
const saveConversations = (conversations)=>{
    localStorage.setItem("conversationHistory", JSON.stringify(conversations));
};


/***/ }),

/***/ 2815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ saveFolders)
/* harmony export */ });
const saveFolders = (folders)=>{
    localStorage.setItem("folders", JSON.stringify(folders));
};


/***/ }),

/***/ 1101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dk: () => (/* binding */ importData),
/* harmony export */   u1: () => (/* binding */ exportData)
/* harmony export */ });
/* unused harmony exports isExportFormatV1, isExportFormatV2, isExportFormatV3, isExportFormatV4, isLatestExportFormat, cleanData */
/* harmony import */ var _clean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4927);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_clean__WEBPACK_IMPORTED_MODULE_0__]);
_clean__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function isExportFormatV1(obj) {
    return Array.isArray(obj);
}
function isExportFormatV2(obj) {
    return !("version" in obj) && "folders" in obj && "history" in obj;
}
function isExportFormatV3(obj) {
    return obj.version === 3;
}
function isExportFormatV4(obj) {
    return obj.version === 4;
}
const isLatestExportFormat = (/* unused pure expression or super */ null && (isExportFormatV4));
function cleanData(data) {
    if (isExportFormatV1(data)) {
        return {
            version: 4,
            history: (0,_clean__WEBPACK_IMPORTED_MODULE_0__/* .cleanConversationHistory */ .m)(data),
            folders: [],
            prompts: []
        };
    }
    if (isExportFormatV2(data)) {
        return {
            version: 4,
            history: (0,_clean__WEBPACK_IMPORTED_MODULE_0__/* .cleanConversationHistory */ .m)(data.history || []),
            folders: (data.folders || []).map((chatFolder)=>({
                    id: chatFolder.id.toString(),
                    name: chatFolder.name,
                    type: "chat"
                })),
            prompts: []
        };
    }
    if (isExportFormatV3(data)) {
        return {
            ...data,
            version: 4,
            prompts: []
        };
    }
    if (isExportFormatV4(data)) {
        return data;
    }
    throw new Error("Unsupported data format");
}
function currentDate() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}-${day}`;
}
const exportData = ()=>{
    let history = localStorage.getItem("conversationHistory");
    let folders = localStorage.getItem("folders");
    let prompts = localStorage.getItem("prompts");
    if (history) {
        history = JSON.parse(history);
    }
    if (folders) {
        folders = JSON.parse(folders);
    }
    if (prompts) {
        prompts = JSON.parse(prompts);
    }
    const data = {
        version: 4,
        history: history || [],
        folders: folders || [],
        prompts: prompts || []
    };
    const blob = new Blob([
        JSON.stringify(data, null, 2)
    ], {
        type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `rulz_ai_history_${currentDate()}.json`;
    link.href = url;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
const importData = (data)=>{
    const { history, folders, prompts } = cleanData(data);
    const oldConversations = localStorage.getItem("conversationHistory");
    const oldConversationsParsed = oldConversations ? JSON.parse(oldConversations) : [];
    const newHistory = [
        ...oldConversationsParsed,
        ...history
    ].filter((conversation, index, self)=>index === self.findIndex((c)=>c.id === conversation.id));
    localStorage.setItem("conversationHistory", JSON.stringify(newHistory));
    if (newHistory.length > 0) {
        localStorage.setItem("selectedConversation", JSON.stringify(newHistory[newHistory.length - 1]));
    } else {
        localStorage.removeItem("selectedConversation");
    }
    const oldFolders = localStorage.getItem("folders");
    const oldFoldersParsed = oldFolders ? JSON.parse(oldFolders) : [];
    const newFolders = [
        ...oldFoldersParsed,
        ...folders
    ].filter((folder, index, self)=>index === self.findIndex((f)=>f.id === folder.id));
    localStorage.setItem("folders", JSON.stringify(newFolders));
    const oldPrompts = localStorage.getItem("prompts");
    const oldPromptsParsed = oldPrompts ? JSON.parse(oldPrompts) : [];
    const newPrompts = [
        ...oldPromptsParsed,
        ...prompts
    ].filter((prompt, index, self)=>index === self.findIndex((p)=>p.id === prompt.id));
    localStorage.setItem("prompts", JSON.stringify(newPrompts));
    return {
        version: 4,
        history: newHistory,
        folders: newFolders,
        prompts: newPrompts
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ savePrompts)
/* harmony export */ });
/* unused harmony export updatePrompt */
const updatePrompt = (updatedPrompt, allPrompts)=>{
    const updatedPrompts = allPrompts.map((c)=>{
        if (c.id === updatedPrompt.id) {
            return updatedPrompt;
        }
        return c;
    });
    savePrompts(updatedPrompts);
    return {
        single: updatedPrompt,
        all: updatedPrompts
    };
};
const savePrompts = (prompts)=>{
    localStorage.setItem("prompts", JSON.stringify(prompts));
};


/***/ }),

/***/ 5311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ getSettings),
/* harmony export */   z: () => (/* binding */ saveSettings)
/* harmony export */ });
const STORAGE_KEY = "settings";
const getSettings = ()=>{
    let settings = {
        theme: "dark"
    };
    const settingsJson = localStorage.getItem(STORAGE_KEY);
    if (settingsJson) {
        try {
            let savedSettings = JSON.parse(settingsJson);
            settings = Object.assign(settings, savedSettings);
        } catch (e) {
            console.error(e);
        }
    }
    return settings;
};
const saveSettings = (settings)=>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
};


/***/ }),

/***/ 1697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ throttle)
/* harmony export */ });
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return (...args)=>{
        if (!lastRan) {
            func(...args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(()=>{
                if (Date.now() - lastRan >= limit) {
                    func(...args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}


/***/ })

};
;
'use client'

import React, {useEffect} from "react";
import {COMPONENTS_ENTER_LISTENER_ID} from '../const'

export function EnterKeyHandlerProvider({children}: { children?: React.ReactNode }) {
    useEffect(() => {
        const handelKeyDown = (ev: KeyboardEvent) => {
            if (ev.key === 'Enter' && !ev.shiftKey && !ev.ctrlKey && !ev.altKey && !ev.metaKey) {
                const submitButton = document.getElementById(COMPONENTS_ENTER_LISTENER_ID);
                if (submitButton) {
                    submitButton.click();
                }
            }

        }
        window.addEventListener('keydown', handelKeyDown)
        return () => {
            window.removeEventListener('keydown', handelKeyDown)
        }
    }, []);

    return <>{children}</>
}
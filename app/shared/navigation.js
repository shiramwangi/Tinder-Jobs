import { Frame } from '@nativescript/core';

export function navigate(page, context = {}) {
    Frame.topmost().navigate({
        moduleName: page,
        context: context,
        animated: true,
        transition: {
            name: 'slide',
            duration: 200,
            curve: 'ease'
        }
    });
}
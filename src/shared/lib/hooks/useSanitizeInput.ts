import { useCallback } from 'react';

const useSanitizeInput = () => {
    const sanitizeInput = useCallback((input: string) => {
        const sqlInjectionPattern = /('|"|--|;|\/\*|\*\/|xp_)/gi;
        const scriptPattern = /<script.*?>.*?<\/script>/gi;
        let sanitizedInput = input.replace(sqlInjectionPattern, '');
        sanitizedInput = sanitizedInput.replace(scriptPattern, '');
        return sanitizedInput;
    }, []);

    return sanitizeInput;
};

export default useSanitizeInput;


import hash from 'object-hash';

function hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;

    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

    const toHex = (x: number) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.padStart(2, '0');
    };

    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

export function getHashColor(data: unknown): string | undefined {
    if (!data) return undefined;

    try {
        const resHash = hash(data);
        const numericHash = parseInt(resHash.slice(0, 8), 16);
        const hue = numericHash % 360; // Hue от 0 до 359

        return hslToHex(hue, 70, 60);
    } catch {
        return '#cccccc';
    }
}

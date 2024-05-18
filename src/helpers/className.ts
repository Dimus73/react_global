
type Modes = Record<string, boolean | string>

// const obj: Modes = {
//     'hovered':
// }

export function classNames(cls: string, mods:Modes, additional:string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className,value]) => Boolean(value))
            .map(([className, value])=>className)
    ]
        .join(' ')
}

import {Directive} from '@angular/core';
import {Subject} from 'rxjs';

@Directive()
export abstract class TuiEditor {
    readonly stateChange$ = new Subject();
    readonly valueChange$ = new Subject<string>();

    abstract isActive(name: string | Record<string, string>): boolean;
    abstract undoDisabled(): boolean;
    abstract redoDisabled(): boolean;
    abstract getFontColor(): string;
    abstract getBackgroundColor(): string;
    abstract onAlign(align: string): void;
    abstract setImage(src: string): void;
    abstract undo(): void;
    abstract redo(): void;
    abstract setHorizontalRule(): void;
    abstract removeFormat(): void;
    abstract setFontColor(color: string): void;
    abstract setBackgroundColor(color: string): void;
    abstract toggleBold(): void;
    abstract toggleItalic(): void;
    abstract toggleUnderline(): void;
    abstract toggleBlockquote(): void;
    abstract toggleStrike(): void;
    abstract toggleOrderedList(): void;
    abstract toggleUnorderedList(): void;
    abstract toggleCode(): void;
    abstract togglePre(): void;
    abstract toggleSubscript(): void;
    abstract toggleSuperscript(): void;
    abstract toggleCodeBlock(): void;
    abstract insertTable(rows: number, cols: number): void;
    abstract addColumnAfter(): void;
    abstract addColumnBefore(): void;
    abstract addRowAfter(): void;
    abstract addRowBefore(): void;
    abstract deleteColumn(): void;
    abstract deleteRow(): void;
    abstract mergeCells(): void;
    abstract canMergeCells(): boolean;
    abstract splitCell(): void;
    abstract setHeading(level: number): void;
    abstract setParagraph(): void;
    abstract toggleLink(href: string): void;

    abstract focus(): void;
    abstract get isFocused(): boolean;
}

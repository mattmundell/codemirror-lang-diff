import { parser } from "./syntax.grammar";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { styleTags, tags } from "@lezer/highlight";

let props;

props = [ styleTags({ Addition: tags.inserted,
                      Deletion: tags.deleted,
                      Command: tags.meta,
                      Index: tags.meta,
                      NewFile: tags.meta,
                      OldFile: tags.meta,
                      Filename: tags.meta,
                      Location: tags.meta }) ];

export const diffLanguage = LRLanguage.define({
  parser: parser.configure({ props: props }),
});

export function diff() {
  return new LanguageSupport(diffLanguage);
}

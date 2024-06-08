import { parser } from "./syntax.grammar";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { styleTags, Tag, tags } from "@lezer/highlight";

export const customTags = { diffFilename: Tag.define(tags.meta),
                            diffNewfile: Tag.define(tags.meta),
                            diffOldfile: Tag.define(tags.meta) }

let props;

props = [ styleTags({ Addition: tags.inserted,
                      Deletion: tags.deleted,
                      Command: tags.meta,
                      Index: tags.meta,
                      Commit: tags.meta,
                      NewFile: customTags.diffNewfile,
                      OldFile: customTags.diffOldfile,
                      Filename: customTags.diffFilename,
                      Location: tags.meta,
                      Linerange: tags.meta }) ];

export const diffLanguage = LRLanguage.define({
  parser: parser.configure({ props: props }),
});

export function diff() {
  return new LanguageSupport(diffLanguage);
}

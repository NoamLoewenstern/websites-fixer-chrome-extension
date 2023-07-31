interface WebsitePlugin {
  urlMatch: RegExp;
  cbs: (() => void | Promise<void>)[];
  sequenceImportant?: boolean;
}

<!-- markdownlint-disable no-duplicate-header no-inline-html -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.1] - 2018-02-07

### Fixed

- "Load more" bug in search results.

### Changed

- Use Marko event system to trigger bookmark folder close for better efficiency than browser native events.
- Simplify logic for opening a bookmark folder to the left; avoids a bunch of complex calculations on every folder open.
- Custom JavaScript object property mangling for even more file size savings.
- Small development watch script CLI feedback improvement.

## [0.3.0] - 2018-02-05

### Added

- Better handle when to open and close bookmark folders for a smoother experience.
- Error tracking. Async and non-invasive. Since the performance impact is low it's also on by default but is easy to opt-out of.

### Fixed

- Menu animation no longer stutters.
- Menu is a bit more usable on small screens.
- Bug where the document is loaded multiple times due to an incorrect `<img>` src attribute.

### Changed

- Higher priority main JavaScript file loading for better load performance.
- Better CSS minification for smaller code final size and faster browser parsing.
- Build and development process improvements.
- Tighter <abbr title="Content Security Policy">CSP</abbr> than Chrome defaults for better security.
- JavaScript bundle size reductions.
- General code clean up.

## [0.2.0] - 2018-02-04

### Added

- Now published on the Google Chrome web store: <https://chrome.google.com/webstore/detail/new-tab/cpcibnbdmpmcmnkhoiilpnlaepkepknb>.
- Search now also finds matches in your browsing history.
- Subtle shadows to show depth and highlight areas of interest.
- New menu items and menu open animation.
- Listen to tab events and update tabs list when something changes.
- Show message when there are no matching search results for a category.
- Wrote a better readme.

### Fixed

- Bookmark folders open to the right if there's not enough space to show the folder in the window.
- Debounce search input to help prevent layout thrashing when search results appear.
- Add `title` attribute to bookmarks to view long bookmark titles on hover.

### Changed

- Renamed all files and directories for consistency.
- A more logical file layout including most Marko components as single files rather than directories with multiple files.
- Better build flow.
- Performance improvements:
  - Inline CSS in HTML + add minimal page markup to template for near-instant initial page load.
  - Better minification in builds — even though Chrome extensions serve local files from the filesystem, minification still improves browser parsing times.
  - Short CSS classes for faster DOM parsing and matching.
  - Set many elements as `no-update` for much faster Marko rendering passes.
  - Use `key` on repeating elements for faster rendering when elements move in the DOM (e.g. during search/filtering).
- Clean up, improve, and move build scripts into `/build`.

### Removed

- Dependency `fast-memoize` as the benefit was not really there.

## 0.1.0 - 2018-01-25

### Added

- Initial public version including all the basics; working proof of concept code, readme, etc. Not ready for release yet though, it's still far from being actually useful!

[Unreleased]: https://github.com/MaxMilton/new-tab/compare/v0.3.1...HEAD
[0.3.1]: https://github.com/MaxMilton/new-tab/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/MaxMilton/new-tab/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/MaxMilton/new-tab/compare/v0.1.0...v0.2.0

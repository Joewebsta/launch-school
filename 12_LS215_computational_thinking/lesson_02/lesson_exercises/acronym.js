function acronym(string) {
  return string.replace(/-/, ' ')
               .split(' ')
               .map(word => word[0].toUpperCase())
               .join('');
}

acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"


PIONEERS = [
  "Nqn Ybirynpr",
  "Tenpr Ubccre",
  "Nqryr Tbyqfgvar",
  "Nyna Ghevat",
  "Puneyrf Onoontr",
  "Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv",
  "Wbua Ngnanfbss",
  "Ybvf Unvog",
  "Pynhqr Funaaba",
  "Fgrir Wbof",
  "Ovyy Tngrf",
  "Gvz Orearef-Yrr",
  "Fgrir Jbmavnx",
  "Xbaenq Mhfr",
  "Fve Nagbal Ubner",
  "Zneiva Zvafxl",
  "Lhxvuveb Zngfhzbgb",
  "Unllvz Fybavzfxv",
  "Tregehqr Oynapu"
].freeze

def decrypt(str)
  result = ""

  str.chars do |char|
    result += decrypt_char(char)
  end

  result
end

def decrypt_char(char)
  case char
  when "A".."M", "a".."m" then (char.ord + 13).chr
  when "N".."Z", "n".."z" then (char.ord - 13).chr
  else char
  end
end

PIONEERS.each do |pioneer|
  puts decrypt(pioneer)
end

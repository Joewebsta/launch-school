def staggered_case(string)
  need_uppercase = true

  characters = string.chars.map do |char|
    if char =~ /[a-z]/i
      char = need_uppercase ? char.upcase : char.downcase
      need_uppercase = !need_uppercase
    end

    char
  end

  characters.join
end

p staggered_case('I Love Launch School!') == 'I lOvE lAuNcH sChOoL!'
p staggered_case('ALL CAPS') == 'AlL cApS'
p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 nUmBeRs'

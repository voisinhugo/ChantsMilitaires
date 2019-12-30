require 'net/http'

TITLE_HEAD = '<h2 class="contentheading">'
LYRICS_HEAD = '<p style="margin-bottom: 0cm;" align="CENTER">'

def write_song_file(link, songId)
  source = Net::HTTP.get('musique-militaire.fr', link)

  puts 'Getting the title'
  partIndex = source.index(TITLE_HEAD)
  startIndex = source.index(/>\n[[:alpha:]\s]+<\/a>/, partIndex)
  endIndex = source.index("<\/a>", partIndex)
  title = source.slice(startIndex+1, endIndex-startIndex-1)
  title = title.slice(title.index(/\S/), title.length)
  puts 'title: ', title

  puts 'Getting the lyrics'
  startIndex = source.index(LYRICS_HEAD)
  endIndex = source.index("</p>", startIndex)
  lyrics = source.slice(startIndex, endIndex-startIndex)

  lyrics.gsub!(LYRICS_HEAD, "")
  lyrics.gsub!(/<strong>[A-Z]+<\/strong><br \/><br \/>/, "")
  lyrics.gsub!(/<strong>Refrain<\/strong>/, "Refrain")
  lyrics.gsub!('<em> </em>', "")
  lyrics.gsub!('<br />', "\\n")
  puts 'Lyrics ok!'

  json = "{
  \"id\": #{songId},
  \"title\": \"#{title}\",
  \"lyrics\": \"#{lyrics}\"
}"

  File.write("./#{title.gsub(/\s/, "")}.json", json)
end

# write_song_file('/ecoles/saint-cyr/la-galette', 0)
write_song_file('/parachutistes/les-commandos', 13)
# write_song_file('/ecoles/saint-cyr/les-casos', 1)

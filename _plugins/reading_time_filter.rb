module Jekyll
  module ReadingTimeFilter
    def reading_time(input)
      words_per_minute = 200 # 평균적인 읽기 속도 (조정 가능)
      sentences_per_minute = 5 # 문장당 읽기 시간 (조정 가능)
      code_block_time = 3 # 코드 블록 읽기 시간 (조정 가능)

      words = input.split.size
      sentences = input.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/).size
      code_blocks = input.scan(/^```.*?^```/m).size

      paragraph_time = (words / words_per_minute).ceil + (sentences / sentences_per_minute).ceil
      code_block_time = code_blocks * code_block_time

      total_time = paragraph_time + code_block_time
      total_time
    end
  end
end

Liquid::Template.register_filter(Jekyll::ReadingTimeFilter)

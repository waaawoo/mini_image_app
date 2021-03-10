class Message < ApplicationRecord
  has_many_attached :image
  validates :content, presence: true
end

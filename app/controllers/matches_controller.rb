class MatchesController < ApplicationController
  # This is obviously not selecting matches - it's just to get the app up and running.
  def index
    companies = Company.all

    matches = []
    companies.each do |company|
      match = Match.new
      match.company = company
      match.interest_decisions = company.requisitions
      matches << match
    end

    render :json => matches
  end
end


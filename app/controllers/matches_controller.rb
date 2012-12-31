class MatchesController < ApplicationController
  # This is obviously not selecting matches - it's just to get the app up and running.
  def index
    interest_decisions = current_user.interest_decisions

    matches = []
    interest_decisions.group_by{|i| i.requisition.company}.each do |company, interest_decisions|
      match = Match.new
      match.company = company
      match.interest_decisions = interest_decisions
      matches << match
    end

    render :json => matches
  end
end


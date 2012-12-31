class MatchesController < ApplicationController
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


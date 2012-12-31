class CompaniesController < ApplicationController
  def uninterested
    company = Company.find(params[:id])
    requsitions = company.requisitions
    interest_decisions = current_user.undecided_interest_decisions.where(:requisition_id => requsitions)
    interest_decisions.each do |interest_decision|
      interest_decision.uninterested!
    end

    render :nothing => true, :status => 204
  end
end


class PeopleController < ApplicationController

    def index
        person = Person.all
        render json: person
    end

end

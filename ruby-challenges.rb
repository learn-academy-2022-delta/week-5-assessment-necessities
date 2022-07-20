# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN



# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# it is hard to switch immediately from javascript to ruby because of the syntax difference; i am going to create a function - filter through an array and return all values that have a specific character 

# def return_specific_letter (array1, char)
#     array1.map do |value|
#         if value == char?
#             array2 << value
#         end
#     end
# end

def return_specific_letter (array1, char)
    array1.select { |value| value.include? char}
end




p return_specific_letter ['coffee', 'tea', 'juice', 'water', 'soda water'], letter_o

p return_specific_letter ['coffee', 'tea', 'juice', 'water', 'soda water'], letter_t


# it took me a bit to look through all my notes and remember the different syntax after coming right from working on javascript; then finding the correct filter array for the function to return the whole string into the new array

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def add_all array1 
    array1.sum
end

p add_all nums_array1

p add_all nums_array2




# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def get_bike_info
        "The Bike is a #{model}, has #{wheels} wheels, and is going #{current_speed}"
    end

    def pedal_fast(go_faster)
        @current_speed = @current_speed + go_faster



    end

    def pedal_brake(slow_down)
        if @current_speed > 0 
            @current_speed = @current_speed - slow_down
        end
        
        if @current_speed <= 0
            @current_speed = 0
        else 
            @current_speed = @current_speed
        end
    end
end




my_bike = Bike.new('BMX')
p my_bike.pedal_fast(10)
p my_bike.pedal_fast(18)
p my_bike.pedal_brake(5)
p my_bike.pedal_brake(25)
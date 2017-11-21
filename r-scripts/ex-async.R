#Normal Distribution Probability
calc<- function(test,x,y) {
  pnorm(q=test,x,sd=y)
}

#Inputs on Website
test = as.integer(input[1])
x = as.integer(input[2])
y = as.integer(input[3])

#Target Value
calc(test,x,y)
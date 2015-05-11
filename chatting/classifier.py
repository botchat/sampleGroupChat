

class Classifier(object):
    '''
    this is used to classify the users using chat room on the basis of msgs they have sent.
    '''
    
    def __init__(self):
        '''
        instintiate the classifier
        '''
        self.keywordList = ['vi@gra', 'v1gra'] # keywordlist to identify chat bots
        self.blockUserList = [] # to maintain information about chat bot froud users
        
        
    def filterMessage(self, msgTuple):
        '''
        identify whether msg is plain msg or link
        if link identify the link is spam or not 
        if spam report to chat manager
        other wise return msg
        '''
        
        # verifying blocked user
        currentUser = msgTuple[0]
        if currentUser in self.blockUserList:
            #No need to verify
            return (' ', self.blockUserList)
            
        # verifying msg type
        msg = msgTuple[1]
        if msg.strip().startswith('http'):
            # msg is link
            spamFlag = False
            for keyword in self.keywordList:
                if msg.strip().find(keyword) != -1:
                    #link is spam
                    spamFlag = True
                    break
            if spamFlag:
                #update bot list
                self.blockUserList.append(currentUser)
                return (' ', self.blockUserList)
            else:
                return (msg, self.blockUserList)
        else:
            return (msg, self.blockUserList)
        
        
if __name__ == '__main__':
    pass
    

def test(input_code):
    tokens = {
        "(": "seperator",
        ")": "seperator",
        "+": "operator",
        "-": "operator",
        "*": "operator",
        "/": "operator",
        "%": "operator",
        "^": "operator",
        "if": "keyword",
        "else": "keyword",
        "while": "keyword",
        "for": "keyword",
        "in": "keyword",
        "and": "keyword",
        "or": "keyword",
        "not": "keyword",
        "is": "keyword",
        "True": "keyword",
        "=": "operator",
    }

    cur = ""

    without_comments = ""

    comment = False

    for i in input_code:
        if i == '~':
            comment = True

        if comment:
            if i == '\n':
                comment = False

        if not comment:
            without_comments += i

    print(without_comments.strip())


test('''~this function is a test
x = x + 1 ~ add 1 to x''')


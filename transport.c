'---------------------------------------------------------------------------------------
' Procedure : GenHTMLTable_Table
' Author    : Daniel Pineault, CARDA Consultants Inc.
' Website   : http://www.cardaconsultants.com
' Purpose   : Generate an HTML Table string from a Table's Recordset
' Copyright : The following is release as Attribution-ShareAlike 4.0 International
'              CC BY-SA 4.0) - https://creativecommons.org/licenses/by-sa/4.0/
' Req'd Refs: Uses Late Binding, so none required
'
' Input Variables:
' ~~~~~~~~~~~~~~~~
' sTable        : Name of the table to use to create the HTML Table string from
' bInclHeader   : True/False whether to include a header row with the field names
'
' Usage:
' ~~~~~~
' sMsg = GenHTMLTable_Table("YourTableName") 'With a Header Row
' sMsg = GenHTMLTable_Table("YourTableName", FALSE) 'No Header Row
'
' Revision History:
' Rev       Date(yyyy/mm/dd)        Description
' **************************************************************************************
' 1         2017-02-14              Initial Release
' 2         2018-09-20              Updated Copyright
' 3         2021-12-17              Implemented thead and tbody for proper table HTML
' 4         2023-05-18              Fix location of tbody tags
' 5         2023-05-19              Renamed function
'---------------------------------------------------------------------------------------
Function GenHTMLTable_Table(sTable As String, Optional bInclHeader As Boolean = True) As String
    On Error GoTo Error_Handler
    Dim db                    As DAO.Database
    Dim rs                    As DAO.Recordset
    Dim fld                   As DAO.Field
    Dim sHTML                 As String

    Set db = CurrentDb
    Set rs = db.OpenRecordset(sTable, dbOpenSnapshot)
    With rs
        sHTML = "<table>" & vbCrLf
        'sHTML = "<table border='1' style='border-collapse:collapse;'>" & vbCrLf
        If bInclHeader = True Then
            'Build the header row if requested
            sHTML = sHTML & vbTab & "<thead>" & vbCrLf
            sHTML = sHTML & vbTab & vbTab & "<tr>" & vbCrLf
            For Each fld In rs.Fields
                sHTML = sHTML & vbTab & vbTab & vbTab & "<th>" & _
                        fld.Name & "</th>" & vbCrLf
            Next
            sHTML = sHTML & vbTab & vbTab & "</tr>" & vbCrLf
            sHTML = sHTML & vbTab & "</thead>" & vbCrLf
        End If
        If .RecordCount <> 0 Then
            sHTML = sHTML & vbTab & "<tbody>" & vbCrLf
            Do While Not .EOF
                'Build a row for each record in the recordset
                sHTML = sHTML & vbTab & vbTab & "<tr>" & vbCrLf
                For Each fld In rs.Fields
                    sHTML = sHTML & vbTab & vbTab & vbTab & "<td>" & _
                            Nz(fld.Value, "") & "</td>" & vbCrLf
                Next
                sHTML = sHTML & vbTab & vbTab & "</tr>" & vbCrLf
                .MoveNext
            Loop
            sHTML = sHTML & vbTab & "</tbody>" & vbCrLf
        End If
        sHTML = sHTML & "</table>"
    End With

    GenHTMLTable_Table = sHTML

Error_Handler_Exit:
    On Error Resume Next
    If Not fld Is Nothing Then Set fld = Nothing
    If Not rs Is Nothing Then
        rs.Close
        Set rs = Nothing
    End If
    If Not db Is Nothing Then Set db = Nothing
    Exit Function

Error_Handler:
  Debug.Print fld.Name
    MsgBox "The following error has occurred" & vbCrLf & vbCrLf & _
           "Error Number: " & Err.Number & vbCrLf & _
           "Error Source: GenHTMLTable_Table" & vbCrLf & _
           "Error Description: " & Err.Description & _
           Switch(Erl = 0, "", Erl <> 0, vbCrLf & "Line No: " & Erl) _
           , vbOKOnly + vbCritical, "An Error has Occurred!"
    Resume Error_Handler_Exit
End Function
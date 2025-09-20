Sub Import_Clmbypn()

Dim blnHasFieldNames As Boolean, blnEXCEL As Boolean, blnReadOnly As Boolean
Dim lngCount As Long
Dim objExcel As Object, objWorkbook As Object
Dim colWorksheets As Collection
Dim strPathFile As String, strTable As String
Dim strPassword As String

' Establish an EXCEL application object
On Error Resume Next
Set objExcel = GetObject(, "Excel.Application")
If Err.Number <> 0 Then
      Set objExcel = CreateObject("Excel.Application")
      blnEXCEL = True
End If
Err.Clear
On Error GoTo 0

' Change this next line to True if the first row in EXCEL worksheet
' has field names
blnHasFieldNames = False

' Replace C:\Filename.xls with the actual path and filename
strPathFile = "https://jkiesenhofer.bplaced.net/SharePoint/Database11.accdb"

' Replace tablename with the real name of the table into which
' the data are to be imported
strTable = "IMP_CLAIMBYPN2"
